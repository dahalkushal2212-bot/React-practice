import Card from "/src/components/card.jsx"

function App() {
  return (
    <>
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <Card
        title="Tailwind Card"
        description="This card is made using Tailwind CSS."
        image="https://picsum.photos/400/300"
      />
    </div>
    
      <Card
        title="Kushal dahla Card created"
        description="This card IS duplicate of the first one."
        image="https://picsum.photos/400/400"
      />
    
    </>

  );
}

export default App;
