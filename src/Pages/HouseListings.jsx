import React, { useState, useEffect } from "react";
import { collection, getDocs, query } from "firebase/firestore";
import { fireDb } from "../firebase/FirebaseConfig";
import Loader from "../componet/Loader";

export const HouseListings = () => {
  const [houses, setHouses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filteredHouses, setFilteredHouses] = useState([]);
  const [searchLocation, setSearchLocation] = useState("");
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");

  useEffect(() => {
    const fetchHouses = async () => {
      try {
        const q = query(collection(fireDb, "homes"));
        const querySnapshot = await getDocs(q);
        const fetchedHouses = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        console.log("Fetched Houses:", fetchedHouses);
        setHouses(fetchedHouses);
        setFilteredHouses(fetchedHouses); // Initially display all houses
      } catch (error) {
        console.error("Error fetching houses:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchHouses();
  }, []);

  useEffect(() => {
    const filterHouses = () => {
      const filtered = houses.filter(
        (house) =>
          house.location.toLowerCase().includes(searchLocation.toLowerCase()) &&
          (minPrice ? house.price >= parseFloat(minPrice) : true) &&
          (maxPrice ? house.price <= parseFloat(maxPrice) : true)
      );
      setFilteredHouses(filtered);
    };

    filterHouses();
  }, [searchLocation, minPrice, maxPrice, houses]);

  const ownerContact = (name, contact, location) => {
    console.log("Owner Contact:", name, contact, location);
  };

  return (
    <>
      <div className="search-container flex flex-wrap justify-center my-5">
        <input
          type="text"
          placeholder="Search by location"
          className="border p-2 mr-2 mb-2 rounded w-full md:w-auto"
          value={searchLocation}
          onChange={(e) => setSearchLocation(e.target.value)}
        />
        <input
          type="number"
          placeholder="Min price"
          className="border p-2 mr-2 mb-2 rounded w-full md:w-auto"
          value={minPrice}
          onChange={(e) => setMinPrice(e.target.value)}
        />
        <input
          type="number"
          placeholder="Max price"
          className="border p-2 mr-2 mb-2 rounded w-full md:w-auto"
          value={maxPrice}
          onChange={(e) => setMaxPrice(e.target.value)}
        />
      </div>

      {loading ? (
        <Loader />
      ) : (
        <div className="houses-container flex flex-wrap justify-center">
          {filteredHouses.length > 0 ? (
            filteredHouses.map((house) => (
              <div
                key={house.id}
                className="houseListing w-full border md:m-auto md:mt-10 p-5 shadow-2xl m-5 flex flex-col md:flex-row rounded-2xl bg-white"
              >
                <div className="order-2 md:order-1 grid grid-cols-2 gap-2 mr-10">
                  {house.images && house.images.slice(0, 4).map((image, index) => (
                    <a
                      href={image}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-indigo-600 hover:text-indigo-900"
                    >
                      <img
                        key={index}
                        src={image}
                        className="h-48 w-48 object-cover rounded-xl"
                        alt={`House ${index + 1}`}
                      />
                    </a>
                  ))}
                  {!house.images && (
                    <p className="text-center text-gray-500">
                      No images available
                    </p>
                  )}
                </div>
                <div className="ml-3 flex-grow order-2 md:order-2 mt-3 md:mt-0">
                  <h5 className="text-2xl font-bold tracking-tight text-gray-900">
                    {house.ownerName}
                  </h5>
                  <p className="text-xl font-semibold text-gray-700">
                    {house.price}
                  </p>
                  <div className="mt-3 border-t border-gray-300 pt-3 flex flex-col md:flex-row">
                    <div className="flex-1">
                      <p className="font-normal text-gray-700">Contact Number</p>
                      <p className="font-semibold text-gray-700 mb-2">
                        {house.contactNumber}
                      </p>
                      <p className="font-normal text-gray-700">House Facilities</p>
                      <p className="font-semibold text-gray-700">
                        {house.facilities.join(", ")}
                      </p>
                    </div>
                    <div className="flex-1">
                      <p className="font-normal text-gray-600">Address</p>
                      <p className="font-semibold text-gray-700">
                        {house.location}
                      </p>
                    </div>
                  </div>
                  <div className="mt-3">
                    <p className="font-normal text-gray-600">Furnishing</p>
                    <p className="font-semibold text-gray-700">
                      {house.furnishing}
                    </p>
                  </div>
                  <div className="mt-3">
                    <p className="font-normal text-gray-600">Accommodation Type</p>
                    <p className="font-semibold text-gray-700">
                      {house.accommodationType}
                    </p>
                  </div>
                  <div className="mt-3">
                    <p className="font-normal text-gray-600">Description</p>
                    <p className="font-semibold text-gray-700">
                      {house.roomDescription}
                    </p>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <p className="text-center text-xl text-gray-500">No houses found</p>
          )}
        </div>
      )}
    </>
  );
};
