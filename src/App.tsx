const App = () => {
  return (
    <div className="w-full h-[70vh] flex justify-between items-center p-10 bg-gray-300">
      <div className="w-80 p-3 rounded-md bg-light-background border-light-border">
        <h1 className="text-xl font-semibold text-light-textPrimary ">This is the heading.</h1>
        <p className="text-light-textSecondary">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus, voluptates ut ipsum, nisi tempora architecto
          ad nulla laborum culpa quam iusto, ea accusamus doloremque?
        </p>
        <button className="px-3 py-1 bg-light-accentPrimary text-white rounded-md my-3 float-end">See More</button>
      </div>
      <div className="w-80 p-3 rounded-md bg-dark-background border-dark-border">
        <h1 className="text-xl font-semibold text-dark-textPrimary ">This is the heading.</h1>
        <p className="text-dark-textSecondary">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus, voluptates ut ipsum, nisi tempora architecto
          ad nulla laborum culpa quam iusto, ea accusamus doloremque?
        </p>
        <button className="px-3 py-1 bg-light-accentPrimary text-white rounded-md my-3 float-end">See More</button>
      </div>
    </div>
  );
};

export default App;
