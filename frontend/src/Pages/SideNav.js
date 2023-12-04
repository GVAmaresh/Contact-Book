import React from "react";

const group = ["All", "Gender", "Work", "Friends"];

const ListTheGroup = () => {
  return (
    <>
      {group.map((e) => (
        <div className="listTheGroup" key={e}>
          {e}
        </div>
      ))}
    </>
  );
};

function SideNav() {
  return (
    <div className="sidenav">
      <div className="new-contact">new contact</div>
      <div className="group">
        <div className="groupHeading">Group</div>
        <div className="listGroup">
          <ListTheGroup />
        </div>
      </div>
      <div className="new-contact">new group</div>
    </div>
  );
}

export default SideNav;
