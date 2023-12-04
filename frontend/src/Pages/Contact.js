import React, { useContext } from "react";
import { UserContext } from "./Main";
import { useDispatch } from "react-redux";
import { fetchData2 } from "../features/apiCalling";

const Search = () => {
  return (
    <div className="search">
      <i className="fas fa-search input-icon"></i>
      <input
        type="text"
        className="input-text"
        placeholder="Search Your Contacts"
      />
    </div>
  );
};
const Sort = () => {
  return (
    <div className="sort">
      <div className="select-container">
        <select className="custom-select" name="sort">
          <option value="name">Sort by: Name</option>
          <option value="age">Sort by: Age</option>
          <option value="gender">Sort by: Gender</option>
        </select>
      </div>
      <div className="column">
        <span>1-20 per page</span>
        <span className="box left">{`<`}</span>
        <span className="box right">{`>`}</span>
      </div>
    </div>
  );
};
const contact = [
  {
    _id: "6568e9ad8b938f382e7ea66a",
    id: 25,
    first_name: "Tristam",
    last_name: "Morsley",
    email: "tmorsleyo@engadget.com",
    gender: "Male",
    avatar:
      "https://robohash.org/repellendusetvoluptatibus.png?size=50x50&set=set1",
    domain: "IT",
    available: false,
    __v: 0,
  },
  {
    _id: "6568e9ad8b938f382e7ea65a",
    id: 9,
    first_name: "Corella",
    last_name: "Coniff",
    email: "cconiff8@guardian.co.uk",
    gender: "Bigender",
    avatar: "https://robohash.org/nihilexcepturiomnis.png?size=50x50&set=set1",
    domain: "UI Designing",
    available: false,
    __v: 0,
  },
  {
    _id: "6568e9ad8b938f382e7ea65b",
    id: 10,
    first_name: "Cecilia",
    last_name: "Waldocke",
    email: "cwaldocke9@gmpg.org",
    gender: "Female",
    avatar: "https://robohash.org/commodiestvoluptatem.png?size=50x50&set=set1",
    domain: "Management",
    available: true,
    __v: 0,
  },
  {
    _id: "6568e9ad8b938f382e7ea66c",
    id: 27,
    first_name: "Shauna",
    last_name: "Routham",
    email: "srouthamq@shutterfly.com",
    gender: "Female",
    avatar: "https://robohash.org/doloresolutasuscipit.png?size=50x50&set=set1",
    domain: "IT",
    available: false,
    __v: 0,
  },
  {
    _id: "6568e9ad8b938f382e7ea66d",
    id: 28,
    first_name: "Selena",
    last_name: "Mathewson",
    email: "smathewsonr@auda.org.au",
    gender: "Female",
    avatar: "https://robohash.org/recusandaevelut.png?size=50x50&set=set1",
    domain: "Finance",
    available: true,
    __v: 0,
  },
];
const ContactList = () => {
  const { setImfId } = useContext(UserContext);
  const dispatch = useDispatch();
  const handleClick = (ev, id) => {
    ev.preventDefault();
    console.log(id);
    dispatch(fetchData2(id));
    setImfId(id);
  };
  return (
    <div className="contactList">
      {contact.map((e) => (
        <div
          className="contact"
          key={e._id}
          onClick={(ev) => {
            ev.preventDefault();
            handleClick(ev, e._id);
          }}
        >
          <div className="img">
            <img src={e.avatar || ""} alt="" className="e_img" />
          </div>

          <div className="e_name">
            {e.first_name} {e.last_name}
          </div>
          <div className="e_email">{e.email}</div>
        </div>
      ))}
    </div>
  );
};
function Contact() {
  return (
    <div>
      <Search />
      <Sort />
      <ContactList />
    </div>
  );
}

export default Contact;
