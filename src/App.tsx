import { useState } from "react";
import { CategoryPills } from "./components/CategoryPills";
import { PageHeader } from "./components/PageHeader";
import { categories } from "./data/home";

function App() {
  const [selectedCategory, setSelectedCategory] = useState(categories[0]);
  return (
    <div className="max-h-screen flex flex-col">
      <PageHeader />
      <div className="grid grid-cols-[auto,1fr] flex-grow-1 overflow-auto">
        <div>SideBar</div>
        <div className="sticky top-0 bg-white z-10 pb-4">
          <CategoryPills
            categories={categories}
            selectedCategory={selectedCategory}
            onSelect={setSelectedCategory}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
