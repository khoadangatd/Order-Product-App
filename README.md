# Order Product App
![Tên mô tả ảnh](./public/screenshot.png)
### 🚀 HOW TO RUN
1. Clone the repository
2. Install dependencies: `npm install`
3. Run the development server: `npm run dev`
4. Open http://localhost:5173 in your browser

### 🧠 TECHNICAL DECISIONS
Product Listing: Simulated API with deliberate delay for loading state demo.
Search & Filter: Debounced search to optimize performance.
Cart Management: Full CRUD (Create, Read, Update, Delete) for shopping cart.
Persistent Storage: Cart data is synced with localStorage.

State Management Strategy:
Global State: Used Context API + useReducer for the shopping cart to keep the bundle size small.
Local State: Used useState for UI-specific states like searchTerm or categoryFilter.

Component Structure:
Organized by components, services, hooks, and helpers.
Separation of Concerns: UI is handled by Ant Design

Suspense & Async Data: Used React Suspense to wrap the ProductList. This allows for a clean "Skeleton" loading state while the simulated API (800ms delay) fetches data.

### 🧠 LIVE
https://khoadangatd.github.io/Order-Product-App/