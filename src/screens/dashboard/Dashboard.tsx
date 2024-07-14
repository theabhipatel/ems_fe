import Button from "@/components/Button";

const Dashboard = () => {
  return (
    <div className="w-full h-screen flex justify-between items-center p-20 bg-black">
      <div>
        <div className="flex items-center  bg-light-accentSecondary/5 text-light-accentSecondary border-[1.25px] border-light-accentSecondary/45 px-4 py-2 rounded-md mt-2">
          <span className="mr-3">#</span>
          <p className="text-xs">You will need admin privileges to install and access this application.</p>
        </div>
        <div className="flex items-center bg-light-accentPrimary/5 text-light-accentPrimary border-[1.25px] border-light-accentPrimary/50 px-4 py-2 rounded-md mt-2">
          <span className="mr-3">#</span>
          <p className="text-xs"> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore, tempora!</p>
        </div>
        <button className="flex items-center bg-light-error/5 text-light-error/70 border-[1.25px] border-light-error/30 px-4 py-2 rounded-md mt-2">
          <span className="mr-3">#</span>
          <p className="text-xs"> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore, tempora!</p>
          <div></div>
        </button>
        <Button>
          <span className="mr-3">#</span>
          <p className="text-xs"> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore, tempora!</p>
        </Button>
        <Button buttonColor="green">
          <span className="mr-3">#</span>
          <p className="text-xs"> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore, tempora!</p>
        </Button>
        <Button buttonColor="blue">
          <span className="mr-3">#</span>
          <p className="text-xs"> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore, tempora!</p>
        </Button>
        <Button buttonColor="red" className="flex flex-col items-start">
          <div className="flex flex-col items-start text-start">
            <span className="mr-3"># Something Heading</span>
            <p className="text-xs"> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore, tempora!</p>
            <p className="text-xs">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore, tempora! Lorem ipsum dolor sit amet
            </p>
          </div>
        </Button>
      </div>
    </div>
  );
};

export default Dashboard;
