export default function TailwindTestPage() {
  return (
    <div className="min-h-screen bg-baseClara">
      {/* Header */}
      <header className="bg-contraste1 text-baseClara p-6">
        <h1 className="text-4xl font-bold text-center">Tailwind CSS Test Page</h1>
        <p className="text-center mt-2 text-baseOscura">Testing all Tailwind features and custom colors</p>
      </header>

      <div className="container mx-auto p-6 space-y-8">
        {/* Custom Color Palette */}
        <section className="bg-baseMedia p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-semibold mb-4 text-contraste1">Custom Color Palette</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="bg-acento1 p-4 rounded text-baseClara text-center">
              <div className="font-semibold">Acento 1</div>
              <div className="text-sm">#E69F45</div>
            </div>
            <div className="bg-acento2 p-4 rounded text-baseClara text-center">
              <div className="font-semibold">Acento 2</div>
              <div className="text-sm">#F35530</div>
            </div>
            <div className="bg-contraste1 p-4 rounded text-baseClara text-center">
              <div className="font-semibold">Contraste 1</div>
              <div className="text-sm">#222222</div>
            </div>
            <div className="bg-contraste2 p-4 rounded text-baseClara text-center">
              <div className="font-semibold">Contraste 2</div>
              <div className="text-sm">#3B3B3B</div>
            </div>
            <div className="bg-contraste3 p-4 rounded text-baseClara text-center">
              <div className="font-semibold">Contraste 3</div>
              <div className="text-sm">#515151</div>
            </div>
            <div className="bg-contraste4 p-4 rounded text-baseClara text-center">
              <div className="font-semibold">Contraste 4</div>
              <div className="text-sm">#626262</div>
            </div>
            <div className="bg-baseOscura p-4 rounded text-contraste1 text-center border-2 border-contraste3">
              <div className="font-semibold">Base Oscura</div>
              <div className="text-sm">#ECE2D4</div>
            </div>
            <div className="bg-baseClara p-4 rounded text-contraste1 text-center border-2 border-contraste3">
              <div className="font-semibold">Base Clara</div>
              <div className="text-sm">#FCF8F3</div>
            </div>
          </div>
        </section>

        {/* Typography */}
        <section className="bg-white p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-semibold mb-4 text-contraste1">Typography</h2>
          <div className="space-y-4">
            <h1 className="text-5xl font-bold text-acento1">Heading 1</h1>
            <h2 className="text-4xl font-semibold text-acento2">Heading 2</h2>
            <h3 className="text-3xl font-medium text-contraste2">Heading 3</h3>
            <p className="text-lg text-contraste3">
              This is a paragraph with regular text. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
            <p className="text-sm text-contraste4 italic">
              This is smaller italic text for captions or secondary information.
            </p>
          </div>
        </section>

        {/* Buttons */}
        <section className="bg-baseMedia p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-semibold mb-4 text-contraste1">Buttons</h2>
          <div className="flex flex-wrap gap-4">
            <button className="bg-acento1 hover:bg-opacity-90 text-baseClara px-6 py-3 rounded-lg font-semibold transition-all duration-200 transform hover:scale-105">
              Primary Button
            </button>
            <button className="bg-acento2 hover:bg-opacity-90 text-baseClara px-6 py-3 rounded-lg font-semibold transition-all duration-200 transform hover:scale-105">
              Secondary Button
            </button>
            <button className="bg-transparent border-2 border-contraste1 text-contraste1 hover:bg-contraste1 hover:text-baseClara px-6 py-3 rounded-lg font-semibold transition-all duration-200">
              Outline Button
            </button>
            <button className="bg-contraste4 hover:bg-contraste3 text-baseClara px-6 py-3 rounded-lg font-semibold transition-all duration-200">
              Dark Button
            </button>
          </div>
        </section>

        {/* Cards */}
        <section className="bg-white p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-semibold mb-4 text-contraste1">Cards</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-baseClara border border-baseOscura rounded-lg p-6 hover:shadow-lg transition-shadow duration-200">
              <div className="w-12 h-12 bg-acento1 rounded-full mb-4"></div>
              <h3 className="text-xl font-semibold text-contraste1 mb-2">Card Title 1</h3>
              <p className="text-contraste3">This is a sample card with custom styling using your color palette.</p>
            </div>
            <div className="bg-baseClara border border-baseOscura rounded-lg p-6 hover:shadow-lg transition-shadow duration-200">
              <div className="w-12 h-12 bg-acento2 rounded-full mb-4"></div>
              <h3 className="text-xl font-semibold text-contraste1 mb-2">Card Title 2</h3>
              <p className="text-contraste3">Another card demonstrating consistent design patterns.</p>
            </div>
            <div className="bg-baseClara border border-baseOscura rounded-lg p-6 hover:shadow-lg transition-shadow duration-200">
              <div className="w-12 h-12 bg-contraste2 rounded-full mb-4"></div>
              <h3 className="text-xl font-semibold text-contraste1 mb-2">Card Title 3</h3>
              <p className="text-contraste3">Third card showing the flexibility of the design system.</p>
            </div>
          </div>
        </section>

        {/* Layout & Spacing */}
        <section className="bg-baseMedia p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-semibold mb-4 text-contraste1">Layout & Spacing</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="bg-acento1 p-4 rounded text-baseClara text-center font-semibold">Grid Item 1</div>
            <div className="bg-acento2 p-4 rounded text-baseClara text-center font-semibold">Grid Item 2</div>
            <div className="bg-contraste2 p-4 rounded text-baseClara text-center font-semibold">Grid Item 3</div>
            <div className="bg-contraste3 p-4 rounded text-baseClara text-center font-semibold">Grid Item 4</div>
          </div>
        </section>

        {/* Forms */}
        <section className="bg-white p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-semibold mb-4 text-contraste1">Form Elements</h2>
          <div className="space-y-4 max-w-md">
            <div>
              <label className="block text-sm font-medium text-contraste2 mb-2">Text Input</label>
              <input 
                type="text" 
                placeholder="Enter text here"
                className="w-full px-4 py-2 border border-baseOscura rounded-lg focus:ring-2 focus:ring-acento1 focus:border-transparent outline-none transition-all duration-200"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-contraste2 mb-2">Select Dropdown</label>
              <select className="w-full px-4 py-2 border border-baseOscura rounded-lg focus:ring-2 focus:ring-acento1 focus:border-transparent outline-none transition-all duration-200">
                <option>Option 1</option>
                <option>Option 2</option>
                <option>Option 3</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-contraste2 mb-2">Textarea</label>
              <textarea 
                placeholder="Enter your message"
                rows={4}
                className="w-full px-4 py-2 border border-baseOscura rounded-lg focus:ring-2 focus:ring-acento1 focus:border-transparent outline-none transition-all duration-200 resize-none"
              ></textarea>
            </div>
          </div>
        </section>

        {/* Responsive Design Test */}
        <section className="bg-baseMedia p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-semibold mb-4 text-contraste1">Responsive Design</h2>
          <div className="bg-acento1 text-baseClara p-6 rounded-lg text-center">
            <p className="block sm:hidden text-lg font-semibold">📱 Mobile View (&lt; 640px)</p>
            <p className="hidden sm:block md:hidden text-lg font-semibold">📱 Small Tablet (640px - 768px)</p>
            <p className="hidden md:block lg:hidden text-lg font-semibold">💻 Tablet (768px - 1024px)</p>
            <p className="hidden lg:block xl:hidden text-lg font-semibold">🖥️ Desktop (1024px - 1280px)</p>
            <p className="hidden xl:block text-lg font-semibold">🖥️ Large Desktop (&gt; 1280px)</p>
          </div>
        </section>

        {/* Animations & Transitions */}
        <section className="bg-white p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-semibold mb-4 text-contraste1">Animations & Transitions</h2>
          <div className="flex flex-wrap gap-4">
            <div className="bg-acento1 text-baseClara p-4 rounded-lg hover:rotate-3 transition-transform duration-300 cursor-pointer">
              Hover to Rotate
            </div>
            <div className="bg-acento2 text-baseClara p-4 rounded-lg hover:scale-110 transition-transform duration-300 cursor-pointer">
              Hover to Scale
            </div>
            <div className="bg-contraste2 text-baseClara p-4 rounded-lg hover:shadow-2xl transition-shadow duration-300 cursor-pointer">
              Hover for Shadow
            </div>
          </div>
        </section>
      </div>

      {/* Footer */}
      <footer className="bg-contraste1 text-baseClara p-6 mt-8">
        <div className="text-center">
          <p className="text-lg font-semibold">Tailwind CSS Integration Test</p>
          <p className="text-baseOscura mt-2">All styles are working correctly! ✅</p>
        </div>
      </footer>
    </div>
  );
}
