import Navbar from "./components/Navbar";
import { FiSearch } from "react-icons/fi";
import { AiFillPlusCircle } from "react-icons/ai";
import { useState, useEffect } from "react";
import { collection, getDocs, onSnapshot } from "firebase/firestore";
import { db } from "./config/firebase";
import ContactCard from "./components/ContactCard";
import AddAndUpdateContact from "./components/AddAndUpdateContact";
import useDisclose from "./hooks/useDisclose";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const [contacts, setContact] = useState([]);
  const {isOpen, onClose, onOpen} = useDisclose();

  useEffect(() => {
    const getContacts = async () => {
      try {
        const contactsRef = collection(db, "contacts");
        // const contactsSnapshot = await getDocs(contactsRef);
        onSnapshot(contactsRef, (snapshot) => {
          const contactsList = snapshot.docs.map((doc) => {
            return {
              id: doc.id,
              ...doc.data(),
            };
          });
          setContact(contactsList);
          return contactsList;
        })
      } catch (error) {
        console.log(error);
      }
    };
    getContacts();
  }, []);

  const filterContacts = (e) => {
    const value = e.target.value;
    const contactsRef = collection(db, "contacts");
        // const contactsSnapshot = await getDocs(contactsRef);
        onSnapshot(contactsRef, (snapshot) => {
          const contactsList = snapshot.docs.map((doc) => {
            return {
              id: doc.id,
              ...doc.data(),
            };
          });
          const filteredContacts = contactsList.filter(contact => contact.name.toLowerCase().includes(value.toLowerCase()))
          setContact(filteredContacts);
          return filteredContacts;
        })
  }

  return (
    <>
      <div className="max-w-[370px] mx-auto px-4">
        <Navbar />
        <div className="flex gap-2">
          <div className="flex relative items-center">
            <FiSearch className="text-3xl ml-1 text-white absolute" />
            <input
              type="text"
              onChange={filterContacts}
              className="bg-transparent border border-white rounded-md h-10 flex-grow text-white pl-7"
            />
          </div>
          <div>
            <AiFillPlusCircle
              className="text-4xl text-white cursor-pointer"
              onClick={onOpen}
            />
          </div>
        </div>
        <div className="mt-4 flex flex-col gap-3">
          {contacts?.map((contact) => (
            <ContactCard key={contact.id} contact={contact} />
          ))}
        </div>
      </div>
      <AddAndUpdateContact onClose={onClose} isOpen={isOpen}/>
    </>
  );
}

export default App;
