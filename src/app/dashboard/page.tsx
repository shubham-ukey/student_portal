import Announcements from '../component/Announcements';
import QuickLinks from '../component/QuickLinks';
import ClassRecordings from '../component/ClassRecordings';
import Navbar from '../component/Navbar';

const Dashboard = () => {
  return (
    <>
      <Navbar />
      <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-3 gap-4">
        <div className="col-span-1">
          <Announcements />
        </div>
        <div className="col-span-1 md:col-span-1 lg:col-span-1">
          <QuickLinks />
        </div>
        <div className="col-span-1 md:col-span-1 lg:col-span-1">
          <ClassRecordings />
        </div>
    </div>
    </>
  );
};

export default Dashboard;
