import React from "react";

const arr = [
  {
    id: 1,
    title: "Podcasts",
    bg: `#27856A
    `,
  },
  {
    id: 2,
    title: "Made For You",
    bg: `#1E3264`,
  },
  {
    id: 3,
    title: "Charts",
    bg: `#8D67AB`,
  },
  {
    id: 4,
    title: "Made For You",
    bg: `#E8115B`,
  },
  {
    id: 5,
    title: "Charts",
    bg: `#8D67AB `,
  },
  {
    id: 6,
    title: "Podcasts",
    bg: `#1E3264`,
  },
  {
    id: 7,
    title: "Made For You",
    bg: `#CA3489`,
  },
  {
    id: 8,
    title: "Charts",
    bg: `#B09DC5`,
  },
  {
    id: 9,
    title: "Chill",
    bg: `#509BF5`,
  },
  {
    id: 10,
    title: "Workout",
    bg: `blue`,
  },
  {
    id: 11,
    title: "Workout",
    bg: `#8D67AB`,
  },
  {
    id: 12,
    title: "Workout",
    bg: `blue`,
  },
];

function BrowseAll_child({ item }) {
  return (
    <div
      style={{ background: item.bg }}
      className={`relative  xl:h-[224px] md:h-[200px] sm:h-[150px] h-[100px] rounded-xl p-[20px]`}
    >
      <p className="text-white  font-bold xl:text-2xl md:text-xl sm:text-xl">{item.title}</p>
      <img
        className="absolute bottom-0 right-0 xl:h-auto md:h-32 sm:h-24 h-20"
        src="/img/Album Art1.svg"
        alt=""
      />
    </div>
  );
}

function BrowseAll() {
  const BrowseAllChild = () => {
    return arr.map((item, idx) => <BrowseAll_child key={idx} item={item} />);
  };

  return (
    <div>
      <h2 className="text-white  font-bold mb-[20px] xl:text-3xl md:text-3xl sm:text-2xl">Browse all</h2>
      <div className="grid xl:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4">
        <BrowseAllChild />
      </div>
    </div>
  );
}

export default BrowseAll;
