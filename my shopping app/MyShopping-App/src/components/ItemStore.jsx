import Item from "./Item";

const ItemStore = () => {
  const itemData = [
    {
      image:
        "https://theroadtoenterprise.com/images/react-typescript-edition.png",
      title: "ReactJS",
      price: 500,
    },
    {
      image:
        "https://www.drakensberg.in/cdn/shop/files/Sam-DuffleBag-Navy-Blue-Side-tilt.photo_1080x1080.webp?v=1764588691",
      title: "Bag",
      price: 800,
    },
    {
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQcHByWe7sDZuE5bu90nqGihxP9cG7SeHE8zPu31ERw0IBhv9RNM-drhXI&s=10",
      title: "Lamp",
      price: 1500,
    },
    {
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQcYYaZh5-hHf48LgW3RwW9fwUXVuLy2VL8c3aWm5OI9-EiD8txJTCRYeU&s=10",
      title: "Operating System",
      price: 999,
    },


  ];
  return (
    <div className="home">
      {itemData.map((item, idx) => {
        return <Item key={idx} props={item} />;
      })}
    </div>
  );
};

export default ItemStore;
