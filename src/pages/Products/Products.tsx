import { Search, X } from 'lucide-react';
import { useMemo, useState } from 'react';
import { EmptyState } from '../../components/EmptyState';
import { ProductCard } from '../../components/ProductCard';
import { categories, products } from '../../data/products';
import { useCart } from '../../context/useCart';
import type { Product, ProductCategoryId } from '../../types';
import { getCategoryName } from '../../utils/products';

type CategoryFilter = 'all' | ProductCategoryId;
type SortOption = 'featured' | 'price-asc' | 'price-desc' | 'name-asc' | 'name-desc';

const sortProducts = (items: Product[], sortBy: SortOption) => [...items].sort((a, b) => {
  if (sortBy === 'featured') return Number(b.featured) - Number(a.featured) || a.name.localeCompare(b.name);
  if (sortBy === 'price-asc') return (a.price ?? Number.MAX_SAFE_INTEGER) - (b.price ?? Number.MAX_SAFE_INTEGER);
  if (sortBy === 'price-desc') return (b.price ?? -1) - (a.price ?? -1);
  if (sortBy === 'name-desc') return b.name.localeCompare(a.name);
  return a.name.localeCompare(b.name);
});

export default function Products() {
  const { addItem } = useCart();
  const [selectedCategory, setSelectedCategory] = useState<CategoryFilter>('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [sortBy, setSortBy] = useState<SortOption>('featured');

  const filteredProducts = useMemo(() => {
    const normalizedSearch = searchTerm.trim().toLowerCase();
    const results = products.filter((product) => {
      const categoryName = getCategoryName(product.category).toLowerCase();
      const matchesCategory = selectedCategory === 'all' || product.category === selectedCategory;
      const matchesSearch = !normalizedSearch
        || product.name.toLowerCase().includes(normalizedSearch)
        || product.description.toLowerCase().includes(normalizedSearch)
        || categoryName.includes(normalizedSearch);
      return matchesCategory && matchesSearch;
    });

    return sortProducts(results, sortBy);
  }, [searchTerm, selectedCategory, sortBy]);

  const clearFilters = () => {
    setSearchTerm('');
    setSelectedCategory('all');
    setSortBy('featured');
  };

  return (
    <main className="products-page">
      <section className="products-hero">
        <p className="eyebrow">Collection</p>
        <h1>Browse handmade flower pieces.</h1>
        <p>Mock products are centralized for now. Search, category filters and sorting are ready for real catalog data later.</p>
      </section>

      <section className="product-toolbar" aria-label="Product filters">
        <div className="category-tabs" aria-label="Filter products by category">
          <button type="button" className={selectedCategory === 'all' ? 'category-tab category-tab--active' : 'category-tab'} onClick={() => setSelectedCategory('all')}>All</button>
          {categories.map((category) => (
            <button type="button" key={category.id} className={selectedCategory === category.id ? 'category-tab category-tab--active' : 'category-tab'} onClick={() => setSelectedCategory(category.id)}>
              {category.name}
            </button>
          ))}
        </div>

        <div className="product-controls">
          <label className="search-field" htmlFor="product-search">
            <span>Search products</span>
            <Search size={18} aria-hidden="true" />
            <input id="product-search" type="search" value={searchTerm} onChange={(event) => setSearchTerm(event.target.value)} placeholder="Search by flower, bouquet, category..." />
            {searchTerm ? <button type="button" aria-label="Clear product search" onClick={() => setSearchTerm('')}><X size={16} /></button> : null}
          </label>

          <label className="sort-field" htmlFor="product-sort">
            <span>Sort by</span>
            <select id="product-sort" value={sortBy} onChange={(event) => setSortBy(event.target.value as SortOption)}>
              <option value="featured">Featured</option>
              <option value="price-asc">Price: Low to High</option>
              <option value="price-desc">Price: High to Low</option>
              <option value="name-asc">Name: A to Z</option>
              <option value="name-desc">Name: Z to A</option>
            </select>
          </label>
        </div>
      </section>

      <section className="products-results" aria-live="polite">
        <div className="results-summary">
          <p>{filteredProducts.length} product{filteredProducts.length === 1 ? '' : 's'} found</p>
          <p>{selectedCategory === 'all' ? 'All categories' : getCategoryName(selectedCategory)}</p>
        </div>
        {filteredProducts.length > 0 ? (
          <div className="product-grid">{filteredProducts.map((product) => <ProductCard key={product.id} product={product} onAddToCart={(item) => addItem(item)} />)}</div>
        ) : (
          <EmptyState title="No products found" description="Try a different search term, category or sorting option." actionLabel="Clear filters" onAction={clearFilters} />
        )}
      </section>
    </main>
  );
}
