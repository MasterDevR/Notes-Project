"use client"
import Form from "@/src/components/ui/Form"; 
import GetData from "@/src/components/util/getData";
const App: React.FC = () => {
 
  return (
    <>
    <aside>
      <Form/>
      <GetData/>
    </aside>
    </>
  );
};

export default App;
