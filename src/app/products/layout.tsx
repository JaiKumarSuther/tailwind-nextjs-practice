export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className=" bg-[#fafafa]">
      <h1 className="text-center font-extrabold text-5xl md:text-6xl p-8 bg-gradient-to-r from-teal-500 to-blue-500 text-transparent bg-clip-text drop-shadow-lg">
  PRODUCTS
</h1>

      {children}
      <footer className="p-8 bg-[#f4f4f4] border-t-2 border-[#f0f0f0]">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between gap-8">
            <div className="w-full md:w-[40%]">
              <h1 className="font-bold text-lg">PRODUCT</h1>
              <p className="text-gray-500 text-[14px] mt-2">
                Premium tech products designed with precision and care.
                Experience the perfect balance of form and function.
              </p>
            </div>
            <div className="w-full md:w-[50%]">
              <div className="flex gap-12 justify-end">
                <div>
                  <h3 className="font-bold text-[14px] mb-2">Shop</h3>
                  <ul className="text-gray-500 text-[14px] space-y-1">
                    <li>All Products</li>
                    <li>New Arrivals</li>
                    <li>Featured</li>
                    <li>Sale</li>
                  </ul>
                </div>

                <div>
                  <h3 className="font-bold text-[14px] mb-2">Company</h3>
                  <ul className="text-gray-500 text-[14px] space-y-1">
                    <li>About Us</li>
                    <li>Contact</li>
                    <li>Careers</li>
                    <li>Press</li>
                  </ul>
                </div>

                <div>
                  <h3 className="font-bold text-[14px] mb-2">Support</h3>
                  <ul className="text-gray-500 text-[14px] space-y-1">
                    <li>Help Center</li>
                    <li>Shipping</li>
                    <li>Returns</li>
                    <li>Warranty</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <hr className="my-6 border-[#e0e0e0]" />
          <div className="flex flex-col md:flex-row justify-between text-gray-500 text-[14px]">
            <p>© 2023 Product Inc. All rights reserved.</p>
            <div className="flex gap-4">
              <a href="#">Privacy Policy</a>
              <a href="#">Terms of Service</a>
              <a href="#">Cookies</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
