import React from "react";
import { Accordion } from "flowbite-react";
import bg from "../assets/Carousel2.png";
import Footer from "../componet/Footer";

export const HelpSection = () => {
  return ( 
    <>
      <div
        className="relative h-36 bg-cover bg-bottom"
        style={{ backgroundImage: `url(${bg})`, backdropFilter: "blur(8px)" }}
      >
        <div className="absolute inset-0 bg-gray-900 bg-opacity-50"></div>
        <div className="absolute inset-0 flex justify-center items-center ">
          <h2 className="text-3xl font-bold text-center text-white">
            Have Questions? We've All the Answers
          </h2>
        </div>
      </div>

      <div className="container mx-auto py-12 px-4 sm:px-6 lg:px-8 ">
        <div className="max-w-3xl mx-auto">
          <div className="border-l-4 border-blue-700 pl-4">
            <h4 className="text-lg tracking-widest font-bold">General Questions</h4>
          </div>
          <div className="space-y-8 mt-4 lg:mt-6">
            <Accordion className="bg-white">
              <Accordion.Panel className="bg-white">
                <Accordion.Title className="pl-2 ">
                 <span className="text-gray-400">What is Room Quest?</span> 
                </Accordion.Title>
                <Accordion.Content style={{ backgroundColor: 'white' }}>
                  <p className="text-lg text-blue-700 bg-white p-4">
                    Our platform serves as a marketplace where homeowners can
                    list their rooms for rent, and users can browse and apply
                    for those rooms.
                  </p>
                </Accordion.Content>
              </Accordion.Panel>
            </Accordion>

            <Accordion collapseAll>
              <Accordion.Panel>
                <Accordion.Title className="pl-2">
                <span className="text-gray-400"> How can I list my room for rent on this platform?</span>
                </Accordion.Title>
                <Accordion.Content style={{ backgroundColor: 'white' }}>
                  <p className="text-lg text-blue-700  p-4">
                    To list your room, you need to sign up as a homeowner,
                    provide details about your property, upload photos, and set
                    rental terms such as price, availability, and any specific
                    requirements.
                  </p>
                </Accordion.Content>
              </Accordion.Panel>
            </Accordion>

            <Accordion collapseAll>
              <Accordion.Panel>
                <Accordion.Title className="pl-2">
                <span className="text-gray-400"> Is there a fee for listing a room on the platform?</span>
                </Accordion.Title>
                <Accordion.Content style={{ backgroundColor: 'white' }}>
                  <p className="text-lg text-blue-700  p-4">
                    Yes, there might be a nominal fee for homeowners to list
                    their rooms. This fee helps us maintain and improve the
                    platform for a better user experience.
                  </p>
                </Accordion.Content>
              </Accordion.Panel>
            </Accordion>

            <Accordion collapseAll>
              <Accordion.Panel>
                <Accordion.Title className="pl-2">
                <span className="text-gray-400">How do I apply for a room?</span>
                </Accordion.Title>
                <Accordion.Content style={{ backgroundColor: 'white' }}>
                  <p className="text-lg text-blue-700  p-4">
                    To apply for a room, you need to create a user account,
                    browse listings, and submit an application for the desired
                    room. Homeowners will review your application and may reach
                    out to you for further discussion.
                  </p>
                </Accordion.Content>
              </Accordion.Panel>
            </Accordion>

            <Accordion collapseAll>
              <Accordion.Panel>
                <Accordion.Title className="pl-2">
                <span className="text-gray-400"> What information should I include in my room application?</span>
                </Accordion.Title>
                <Accordion.Content style={{ backgroundColor: 'white' }}>
                  <p className="text-lg text-blue-700  p-4">
                    Your application should include basic personal information,
                    such as your name, contact details, occupation, and a brief
                    introduction about yourself. Additionally, you can mention
                    any specific preferences or requirements you have regarding
                    the room.
                  </p>
                </Accordion.Content>
              </Accordion.Panel>
            </Accordion>

            <Accordion collapseAll>
              <Accordion.Panel>
                <Accordion.Title className="pl-2">
                <span className="text-gray-400">  Are there any safety measures in place for users?</span>
                </Accordion.Title>
                <Accordion.Content style={{ backgroundColor: 'white' }}>
                  <p className="text-lg text-blue-700 p-4">
                    We prioritize user safety and security. We verify
                    homeowners' identities and encourage users to review and
                    provide feedback on their rental experiences. Additionally,
                    we provide tips and guidelines for safe transactions and
                    interactions.
                  </p>
                </Accordion.Content>
              </Accordion.Panel>
            </Accordion>
          </div>
        </div>
      </div>
      <Footer/>
    </>
  );
};
