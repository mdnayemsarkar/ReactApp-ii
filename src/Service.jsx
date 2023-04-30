
import Card from "./Card";
import  ServiceData from "./ServiceData";
import Header from "./Header";
function Service() {
  return (
    <>
      <Header />
      <div className="hdr flex justify-center mt-14 mb-8 text-3xl font-bold text-green-400">
        This is our Services Page
      </div>
      <div className="grid grid-cols-3 gap-8 p-14">
        { ServiceData.map((val, ind) => {
          return <Card key={ind} imgsrc={val.imgsrc} title={val.title} />;
        })}
 </div>
    </>
  );
}
export default Service;