import React from "react";
type moreProps = {
  num: number;
  setNum: (value: number | ((prevVar: number) => number)) => void;
};
const ShowMore = ({ num, setNum }: moreProps) => {
  const showMoreItems = () => {
    setNum(num + 1);
  };

  return (
    <button className="showbtn" onClick={showMoreItems}>
      Show More Items
    </button>
  );
};

export default ShowMore;
