import { HiOutlineUserCircle } from "react-icons/hi";
import { IoMdTrash } from "react-icons/io";
import { RiEditCircleLine } from "react-icons/ri";
import { doc, deleteDoc} from "firebase/firestore";
import { db } from "../config/firebase";
import AddAndUpdateContact from "./AddAndUpdateContact";
import useDisclose from "../hooks/useDisclose";

const ContactCard = ({contact}) => {
  const deleteContact = async (id) => {
    try{
        await deleteDoc(doc(db, "contacts", id));
    }catch(error){
        console.log(error)
    }
}
const {isOpen, onClose, onOpen} = useDisclose();
  return (
    <>
      <div
        key={contact.id}
        className="bg-yellow p-2 rounded-lg flex items-center justify-between"
      >
        <div className="flex gap-2">
          <HiOutlineUserCircle className="text-orange text-4xl" />
          <div className="">
            <h2 className="text-medium">{contact.name}</h2>
            <p className="text-sm">{contact.email}</p>
          </div>
        </div>
        <div className="flex text-3xl">
          <RiEditCircleLine onClick={onOpen} className="cursor-pointer text-blue-500"/>
          <IoMdTrash className="text-red cursor-pointer" onClick={() => deleteContact(contact.id)}/>
        </div>
      </div>
      <AddAndUpdateContact isUpdate isOpen={isOpen} onClose={onClose} contact={contact}/>
    </>
  );
};

export default ContactCard;
