import { useState } from "react";
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { getFirestore, collection, addDoc } from "firebase/firestore";
import bgimage from "../assets/loginlogoutbg.jpg";
import toast from "react-hot-toast";
import { fireDb } from "../firebase/FirebaseConfig";
import { useNavigate } from "react-router";

export const HomeRegistration = () => {
  const [images, setImages] = useState([null, null, null, null]); // State to store the image files
  const [price, setPrice] = useState("");
  const [location, setLocation] = useState("");
  const [ownerName, setOwnerName] = useState("");
  const [furnishing, setFurnishing] = useState("Semi Furnished");
  const [facilities, setFacilities] = useState([]);
  const [accommodationType, setAccommodationType] = useState("1BHK");
  const [contactNumber, setContactNumber] = useState("");
  const [roomDescription, setRoomDescription] = useState("");

  const navigate = useNavigate();
  const storage = getStorage();
  const db = fireDb;

  const handleImageUpload = (index, event) => {
    const newImages = [...images];
    newImages[index] = event.target.files[0];
    setImages(newImages);
  };

  const handlePriceChange = (event) => {
    setPrice(event.target.value);
  };

  const handleLocationChange = (event) => {
    setLocation(event.target.value);
  };

  const handleOwnerNameChange = (event) => {
    setOwnerName(event.target.value);
  };

  const handleFurnishingChange = (event) => {
    setFurnishing(event.target.value);
  };

  const handleFacilitiesChange = (event) => {
    const { value, checked } = event.target;
    if (checked) {
      setFacilities([...facilities, value]);
    } else {
      setFacilities(facilities.filter((facility) => facility !== value));
    }
  };

  const handleAccommodationTypeChange = (event) => {
    setAccommodationType(event.target.value);
  };

  const handleContactNumberChange = (event) => {
    setContactNumber(event.target.value);
  };

  const handleRoomDescriptionChange = (event) => {
    setRoomDescription(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const imageUrls = [];

      // Upload images to Firebase Storage
      for (const image of images) {
        if (image) {
          const storageRef = ref(storage, `images/${image.name}`);
          await uploadBytes(storageRef, image);
          const imageUrl = await getDownloadURL(storageRef);
          imageUrls.push(imageUrl);
        }
      }

      // Store data in Firestore
      const docRef = await addDoc(collection(db, "homes"), {
        images: imageUrls,
        price,
        location,
        ownerName,
        furnishing,
        facilities,
        accommodationType,
        contactNumber,
        roomDescription,
      });

      console.log("Document written with ID: ", docRef.id);
      toast.success("Home Registration Successful");
      navigate("/houselistings");
    } catch (error) {
      console.error("Error adding document: ", error);
      toast.error("Failed to register home. Please try again later.");
    }
  };

  return (
    <div className="min-h-screen">
      <section className="relative md:pt-80 pb-12">
        <div className="absolute inset-0 min-h-[80rem]">
          <img
            src={bgimage}
            alt="Background"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="flex flex-col items-center justify-center px-10 py-6 mx-auto md:h-screen lg:py-0 pt-[5rem]">
          <div className="w-full bg-white bg-opacity-50 rounded-lg shadow md:mt-0 sm:max-w-md xl:p-0 relative">
            <div className="p-5 space-y-5 md:space-y-3 sm:p-7">
              <h1 className="text-xl text-center font-bold leading-tight mb-4 tracking-tight text-gray-900 md:text-2xl">
                Register Your Home
              </h1>
              <form className="space-y-4 md:space-y-6" onSubmit={handleSubmit}>
                <div>
                  <label
                    htmlFor="image1"
                    className="block mb-2 text-sm font-medium text-gray-600"
                  >
                    Image Upload (Required)
                  </label>
                  <input
                    type="file"
                    accept="image/*"
                    name="image1"
                    id="image1"
                    onChange={(e) => handleImageUpload(0, e)}
                    className="border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:border-gray-600 dark:text-gray-600 dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    required
                  />
                </div>
                <div>
                  <label
                    htmlFor="image2"
                    className="block mb-2 text-sm font-medium text-gray-600"
                  >
                    Image Upload (Required)
                  </label>
                  <input
                    type="file"
                    accept="image/*"
                    name="image2"
                    id="image2"
                    onChange={(e) => handleImageUpload(1, e)}
                    className="border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:border-gray-600 dark:text-gray-600 dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    required
                  />
                </div>
                <div>
                  <label
                    htmlFor="image3"
                    className="block mb-2 text-sm font-medium text-gray-600"
                  >
                    Image Upload (Required)
                  </label>
                  <input
                    type="file"
                    accept="image/*"
                    name="image3"
                    id="image3"
                    onChange={(e) => handleImageUpload(2, e)}
                    className="border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:border-gray-600 dark:text-gray-600 dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    required
                  />
                </div>
                <div>
                  <label
                    htmlFor="image4"
                    className="block mb-2 text-sm font-medium text-gray-600"
                  >
                    Image Upload (Optional)
                  </label>
                  <input
                    type="file"
                    accept="image/*"
                    name="image4"
                    id="image4"
                    onChange={(e) => handleImageUpload(3, e)}
                    className="border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:border-gray-600 dark:text-gray-600 dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  />
                </div>
                {/* Other input fields */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="price"
                      className="block mb-2 text-sm font-medium text-gray-600"
                    >
                      Price
                    </label>
                    <input
                      type="number"
                      name="price"
                      id="price"
                      value={price}
                      onChange={handlePriceChange}
                      className="bg-gray-50 bg-opacity-70 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      placeholder="Enter price"
                      required
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="location"
                      className="block mb-2 text-sm font-medium text-gray-600"
                    >
                      Location
                    </label>
                    <input
                      type="text"
                      name="location"
                      id="location"
                      value={location}
                      onChange={handleLocationChange}
                      className="bg-gray-50 bg-opacity-70 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      placeholder="Enter location"
                      required
                    />
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="ownerName"
                      className="block mb-2 text-sm font-medium text-gray-600"
                    >
                      Owner Name
                    </label>
                    <input
                      type="text"
                      name="ownerName"
                      id="ownerName"
                      value={ownerName}
                      onChange={handleOwnerNameChange}
                      className="bg-gray-50 bg-opacity-70 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      placeholder="Enter owner name"
                      required
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="furnishing"
                      className="block mb-2 text-sm font-medium text-gray-600"
                    >
                      Furnishing
                    </label>
                    <select
                      name="furnishing"
                      id="furnishing"
                      value={furnishing}
                      onChange={handleFurnishingChange}
                      className="bg-gray-50 bg-opacity-70 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      required
                    >
                      <option value="Semi Furnished">Semi Furnished</option>
                      <option value="Fully Furnished">Fully Furnished</option>
                      <option value="Not Furnished">Not Furnished</option>
                    </select>
                  </div>
                </div>
                <div>
                  <label className="block mb-2 text-sm font-medium text-gray-600">
                    Facilities
                  </label>
                  <div className="flex flex-wrap gap-2">
                    <label className="flex items-center space-x-2">
                      <input
                        type="checkbox"
                        value="Wifi"
                        onChange={handleFacilitiesChange}
                        className="form-checkbox h-4 w-4 text-gray-600 focus:ring-primary-500 dark:focus:ring-primary-500"
                      />
                      <span className="text-sm text-gray-700">Wifi</span>
                    </label>
                    <label className="flex items-center space-x-2">
                      <input
                        type="checkbox"
                        value="Parking"
                        onChange={handleFacilitiesChange}
                        className="form-checkbox h-4 w-4 text-gray-600 focus:ring-primary-500 dark:focus:ring-primary-500"
                      />
                      <span className="text-sm text-gray-700">Parking</span>
                    </label>
                    <label className="flex items-center space-x-2">
                      <input
                        type="checkbox"
                        value="Gym"
                        onChange={handleFacilitiesChange}
                        className="form-checkbox h-4 w-4 text-gray-600 focus:ring-primary-500 dark:focus:ring-primary-500"
                      />
                      <span className="text-sm text-gray-700">Gym</span>
                    </label>
                    <label className="flex items-center space-x-2">
                      <input
                        type="checkbox"
                        value="Swimming Pool"
                        onChange={handleFacilitiesChange}
                        className="form-checkbox h-4 w-4 text-gray-600 focus:ring-primary-500 dark:focus:ring-primary-500"
                      />
                      <span className="text-sm text-gray-700">
                        Swimming Pool
                      </span>
                    </label>
                    <label className="flex items-center space-x-2">
                      <input
                        type="checkbox"
                        value="Air Conditioning"
                        onChange={handleFacilitiesChange}
                        className="form-checkbox h-4 w-4 text-gray-600 focus:ring-primary-500 dark:focus:ring-primary-500"
                      />
                      <span className="text-sm text-gray-700">
                        Air Conditioning
                      </span>
                    </label>
                    <label className="flex items-center space-x-2">
                      <input
                        type="checkbox"
                        value="Laundry"
                        onChange={handleFacilitiesChange}
                        className="form-checkbox h-4 w-4 text-gray-600 focus:ring-primary-500 dark:focus:ring-primary-500"
                      />
                      <span className="text-sm text-gray-700">Laundry</span>
                    </label>
                    {/* Additional facility option */}
                    <label className="flex items-center space-x-2">
                      <input
                        type="checkbox"
                        value="Food Facility"
                        onChange={handleFacilitiesChange}
                        className="form-checkbox h-4 w-4 text-gray-600 focus:ring-primary-500 dark:focus:ring-primary-500"
                      />
                      <span className="text-sm text-gray-700">
                        Food Facility
                      </span>
                    </label>
                  </div>
                </div>
                <div>
                  <label
                    htmlFor="accommodationType"
                    className="block mb-2 text-sm font-medium text-gray-600"
                  >
                    Accommodation Type
                  </label>
                  <select
                    name="accommodationType"
                    id="accommodationType"
                    value={accommodationType}
                    onChange={handleAccommodationTypeChange}
                    className="bg-gray-50 bg-opacity-70 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    required
                  >
                    <option value="1BHK">1BHK</option>
                    <option value="2BHK">2BHK</option>
                    <option value="3BHK">3BHK</option>
                  </select>
                </div>
                <div>
                  <label
                    htmlFor="contactNumber"
                    className="block mb-2 text-sm font-medium text-gray-600"
                  >
                    Contact Number
                  </label>
                  <input
                    type="tel"
                    name="contactNumber"
                    id="contactNumber"
                    value={contactNumber}
                    onChange={handleContactNumberChange}
                    className="bg-gray-50 bg-opacity-70 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Enter contact number"
                    required
                  />
                </div>
                <div>
                  <label
                    htmlFor="roomDescription"
                    className="block mb-2 text-sm font-medium text-gray-600"
                  >
                    Room Description
                  </label>
                  <textarea
                    name="roomDescription"
                    id="roomDescription"
                    value={roomDescription}
                    onChange={handleRoomDescriptionChange}
                    className="bg-gray-50 bg-opacity-70 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Enter room description"
                    rows="3"
                    required
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full text-white bg-primary-600 bg-blue-600  hover:bg-primary-700 focus:ring-4 focus:ring-primary-600 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
                >
                  Register Home
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
