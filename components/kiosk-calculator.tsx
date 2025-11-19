'use client';

import { useState } from 'react';
import { Plus, Minus, RotateCcw, ChevronDown } from 'lucide-react';

interface Product {
  id: number;
  name: string;
  price: number;
  quantity: number;
  bulkOptions: number[];
}

export default function KioskCalculator() {
  const [products, setProducts] = useState<Product[]>([
    { id: 1, name: 'Pack Lunch', price: 20, quantity: 0, bulkOptions: [2, 3, 4, 5] },
    { id: 5, name: 'Fruit Drink', price: 9, quantity: 0, bulkOptions: [4, 18, 40, 50] },
    { id: 2, name: 'Biscuit-Parle G', price: 4, quantity: 0, bulkOptions: [6, 12, 24, 48] },
    { id: 3, name: 'Biscuit-Coconut', price: 4, quantity: 0, bulkOptions: [6, 12, 24, 48] },
    { id: 4, name: 'Biscuit-Salty', price: 4, quantity: 0, bulkOptions: [6, 12, 24, 48] },
    { id: 6, name: 'Water Bottle', price: 13, quantity: 0, bulkOptions: [4, 15, 30] },
  ]);

  const [moneyCollected, setMoneyCollected] = useState<string>('');
  const [openDropdown, setOpenDropdown] = useState<number | null>(null);

  const updateQuantity = (id: number, delta: number) => {
    setProducts(products.map(p =>
      p.id === id ? { ...p, quantity: Math.max(0, p.quantity + delta) } : p
    ));
  };

  const setBulkQuantity = (id: number, quantity: number) => {
    setProducts(products.map(p =>
      p.id === id ? { ...p, quantity } : p
    ));
    setOpenDropdown(null);
  };

  const totalCost = products.reduce((sum, p) => sum + p.price * p.quantity, 0);
  const collected = parseInt(moneyCollected) || 0;
  const returnCash = Math.max(0, collected - totalCost);

  const handleReset = () => {
    setProducts(products.map(p => ({ ...p, quantity: 0 })));
    setMoneyCollected('');
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-background">
      <div className="w-full max-w-md bg-white/90 rounded-2xl shadow-xl p-4 border border-border">
        {/* Header */}
        <div className="mb-4 -mt-3">
          <h1 className="text-xl font-bold text-primary">
            PARKING KIOSK
          </h1>
          <p className=" text-sm text-foreground/70">
            PRODUCT CALCULATOR
          </p>
        </div>

        {/* Money Input Section */}
        <div className="mb-4 bg-secondary/20 p-2 px-4 rounded-xl border border-secondary">
          <label className="block text-lg font-bold text-foreground mb-3">
            Money Collected (₹)
          </label>
          <input
            type="number"
            value={moneyCollected}
            onChange={(e) => setMoneyCollected(e.target.value)}
            className="w-full px-3 py-2 text-xl font-bold border border-border rounded-lg focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/50 bg-white text-foreground"
            placeholder="0"
          />
        </div>

        {/* Money Info Display */}
        <div className="flex justify-between mb-4 w-full">
          <div className='flex justify-start gap-4 w-[80%]'>            
            <div className="bg-primary/10 p-2 rounded-lg border border-primary w-[45%]">
              <p className="text-xs font-semibold text-foreground/90 mb-1 ">Total Cost</p>
              <p className="text-xl font-bold text-primary">₹{totalCost}</p>
            </div>
            <div className="bg-secondary/10 p-2 rounded-lg border border-secondary w-[45%]">
              <p className="text-xs font-semibold text-foreground/90 mb-1">Return Cash</p>
              <p className="text-xl font-bold text-secondary">₹{returnCash}</p>
            </div>
          </div>
          <button
            onClick={handleReset}
            className="flex items-center justify-center px-5 py-1 bg-green-100 text-green-700 font-bold text-lg rounded-lg hover:bg-border/80 transition-colors border border-green-300 "
          >
            <RotateCcw size={30} />
          </button>
        </div>

        {/* Products Grid */}
        <div className="mb-6">
          <h2 className="text-lg font-bold text-foreground mb-2">Select Items</h2>
          <div className="space-y-3">
            {products.map((product) => (
              <div
                key={product.id}
                className="flex items-center justify-between bg-background p-3 rounded-lg border border-border hover:border-primary/50 transition-colors"
              >
                <div className="flex-1">
                  <p className="font-semibold text-foreground text-base mb-1">
                    {product.name}
                  </p>
                  <p className="text-sm font-bold text-primary">
                    ₹{product.price} each
                  </p>
                </div>

                <div className="flex items-center gap-2 ml-4">
                  <div className="relative">
                    <button
                      onClick={() => setOpenDropdown(openDropdown === product.id ? null : product.id)}
                      className="p-2 bg-yellow-100 text-yellow-700 rounded-lg hover:bg-yellow-200 transition-colors flex items-center gap-1"
                      aria-label="Bulk select quantity"
                      title="Quick select quantities"
                    >
                      <ChevronDown size={18} />
                    </button>
                    
                    {/* Dropdown Menu */}
                    {openDropdown === product.id && (
                      <div className="absolute bottom-full mb-2 -left-16 bg-white border border-primary rounded-lg shadow-lg z-50 min-w-max flex">
                        {product.bulkOptions.map((option) => (
                          <button
                            key={option}
                            onClick={() => setBulkQuantity(product.id, option)}
                            className="block w-full px-4 py-2 text-left hover:bg-primary/10 text-foreground font-semibold first:rounded-t-md last:rounded-b-md transition-colors"
                          >
                            {option}
                          </button>
                        ))}
                      </div>
                    )}
                  </div>

                  <button
                    onClick={() => updateQuantity(product.id, -1)}
                    disabled={product.quantity === 0}
                    className="p-2 bg-red-200 text-red-600 rounded-lg hover:bg-red-200 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                    aria-label="Decrease quantity"
                  >
                    <Minus size={20} />
                  </button>

                  <span className="w-10 text-center font-bold text-lg text-foreground">
                    {product.quantity}
                  </span>

                  <button
                    onClick={() => updateQuantity(product.id, 1)}
                    className="p-2 bg-green-200 text-green-600 rounded-lg hover:bg-green-200 transition-colors"
                    aria-label="Increase quantity"
                  >
                    <Plus size={20} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Footer Info */}
        <div className="mt-6 pt-3 border-t-2 border-border text-center">
          <p className="text-xs text-foreground/60">
            Select items and enter amount received to calculate change
          </p>
        </div>
      </div>
    </div>
  );
}
