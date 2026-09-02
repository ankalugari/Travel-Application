import { useState } from "react";

function Travel() {
  // ================= STATES =================

  const [search, setSearch] = useState("");
  const [showPlanner, setShowPlanner] = useState(false);

  const [destination, setDestination] = useState("");
  const [days, setDays] = useState("");
  const [travelStyle, setTravelStyle] = useState("");
  const [interests, setInterests] = useState("");

  const [trip, setTrip] = useState(null);

  // ================= DESTINATIONS =================

  const destinations = [
    {
      name: "Paris",
      country: "France",
      image:
        "https://images.unsplash.com/photo-1502602898657-3e91760cbb34",
      description:
        "Discover art, architecture, cafes and the unforgettable charm of Paris.",
    },
    {
      name: "Bali",
      country: "Indonesia",
      image:
        "https://images.unsplash.com/photo-1537996194471-e657df975ab4",
      description:
        "Relax among tropical beaches, temples and beautiful rice terraces.",
    },
    {
      name: "Tokyo",
      country: "Japan",
      image:
        "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf",
      description:
        "Experience futuristic cities, ancient traditions and incredible food.",
    },
    {
      name: "Dubai",
      country: "UAE",
      image:
        "https://images.unsplash.com/photo-1512453979798-5ea266f8880c",
      description:
        "Explore futuristic architecture, luxury experiences and desert adventures.",
    },
  ];

  // ================= SEARCH =================

  const filteredDestinations = destinations.filter((destination) =>
    destination.name.toLowerCase().includes(search.toLowerCase())
  );

  // ================= GENERATE TRIP =================

  const generateTrip = () => {
    if (!destination || !days || !travelStyle) {
      alert("Please enter destination, number of days and travel style.");
      return;
    }

    setTrip({
      destination: destination,
      days: Number(days),
      travelStyle: travelStyle,
      interests: interests,
    });

    setShowPlanner(false);

    setTimeout(() => {
      document
        .getElementById("itinerary")
        .scrollIntoView({
          behavior: "smooth",
        });
    }, 200);
  };

  // ================= RENDER =================

  return (
    <div className="min-h-screen bg-slate-950 text-white">

      {/* ================= NAVBAR ================= */}

      <nav className="absolute left-0 right-0 top-0 z-30 flex items-center justify-between px-8 py-6">

        <h1 className="text-2xl font-bold">
          Wander<span className="text-orange-400">ly</span>
        </h1>

        <div className="hidden gap-8 md:flex">

          <a
            href="#destinations"
            className="transition hover:text-orange-400"
          >
            Destinations
          </a>

          <a
            href="#places"
            className="transition hover:text-orange-400"
          >
            Places
          </a>

          <a
            href="#weather"
            className="transition hover:text-orange-400"
          >
            Weather
          </a>

          <a
            href="#itinerary"
            className="transition hover:text-orange-400"
          >
            Itinerary
          </a>

        </div>

        {/* PLAN MY TRIP */}

        <button
          onClick={() => setShowPlanner(true)}
          className="rounded-full bg-white px-6 py-3 text-sm font-semibold text-black transition hover:bg-orange-400"
        >
          Plan My Trip
        </button>

      </nav>


      {/* ================= HERO ================= */}

      <section className="relative h-screen overflow-hidden">

        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 h-full w-full object-cover"
        >
          <source
            src="https://cdn.coverr.co/videos/coverr-aerial-view-of-a-tropical-island-1575/1080p.mp4"
            type="video/mp4"
          />
        </video>

        <div className="absolute inset-0 bg-black/55"></div>

        <div className="relative z-10 flex h-full items-center justify-center px-6 text-center">

          <div className="max-w-4xl">

            <p className="mb-5 text-sm uppercase tracking-[5px] text-orange-300">
              Explore the world
            </p>

            <h2 className="text-5xl font-bold leading-tight md:text-7xl">

              Your next adventure
              <br />

              <span className="text-orange-400">
                starts here.
              </span>

            </h2>

            <p className="mx-auto mt-6 max-w-2xl text-lg text-gray-200">
              Discover amazing destinations, check real-time weather,
              explore famous places and create your perfect itinerary.
            </p>


            {/* SEARCH */}

            <div className="mx-auto mt-10 flex max-w-2xl overflow-hidden rounded-full bg-white p-2">

              <input
                type="text"
                placeholder="Where do you want to go?"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="flex-1 px-6 text-black outline-none"
              />

              <button
                onClick={() => {
                  document
                    .getElementById("destinations")
                    .scrollIntoView({
                      behavior: "smooth",
                    });
                }}
                className="rounded-full bg-orange-500 px-7 py-3 font-semibold text-black hover:bg-orange-600"
              >
                Explore
              </button>

            </div>

          </div>

        </div>

      </section>


      {/* ================= DESTINATIONS ================= */}

      <section
        id="destinations"
        className="px-6 py-24 md:px-16"
      >

        <p className="text-sm uppercase tracking-[4px] text-orange-400">
          Discover
        </p>

        <h2 className="mt-3 text-4xl font-bold">
          Popular Destinations
        </h2>

        <p className="mt-4 text-gray-400">
          Explore some of the most beautiful destinations around the world.
        </p>


        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">

          {filteredDestinations.map((destination) => (

            <div
              key={destination.name}
              className="group overflow-hidden rounded-3xl bg-slate-900"
            >

              <div className="relative h-80 overflow-hidden">

                <img
                  src={destination.image}
                  alt={destination.name}
                  className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/90 to-transparent"></div>

                <div className="absolute bottom-5 left-5">

                  <p className="text-sm text-gray-300">
                    {destination.country}
                  </p>

                  <h3 className="text-2xl font-bold">
                    {destination.name}
                  </h3>

                </div>

              </div>


              <div className="p-5">

                <p className="text-sm leading-6 text-gray-400">
                  {destination.description}
                </p>

                <button
                  onClick={() => {
                    setDestination(destination.name);
                    setShowPlanner(true);
                  }}
                  className="mt-5 text-sm font-semibold text-orange-400 hover:text-orange-300"
                >
                  Plan this trip →
                </button>

              </div>

            </div>

          ))}

        </div>

      </section>


      {/* ================= LOCATION ================= */}

      <section className="px-6 py-20 md:px-16">

        <div className="grid gap-10 rounded-[2rem] bg-orange-500 p-10 md:grid-cols-2 md:p-16">

          <div>

            <p className="text-sm font-semibold uppercase tracking-[3px] text-orange-950">
              Location Awareness
            </p>

            <h2 className="mt-4 text-4xl font-bold text-black">
              Discover places around you.
            </h2>

            <p className="mt-5 text-orange-950">
              Share your location to receive weather information and
              recommendations based on your current location.
            </p>

            <button
              onClick={() => {
                navigator.geolocation.getCurrentPosition(
                  (position) => {
                    console.log(
                      "Latitude:",
                      position.coords.latitude
                    );

                    console.log(
                      "Longitude:",
                      position.coords.longitude
                    );
                  },
                  () => {
                    alert("Unable to access your location.");
                  }
                );
              }}
              className="mt-7 rounded-full bg-black px-7 py-3 font-semibold text-white"
            >
              Use My Location
            </button>

          </div>


          <div className="rounded-3xl bg-black/10 p-8">

            <h3 className="text-2xl font-bold text-black">
              Choose a location
            </h3>

            <div className="mt-5 flex overflow-hidden rounded-full bg-white p-2">

              <input
                type="text"
                placeholder="Search city..."
                className="flex-1 px-5 text-black outline-none"
              />

              <button className="rounded-full bg-black px-6 py-2 text-white">
                Search
              </button>

            </div>

          </div>

        </div>

      </section>


      {/* ================= WEATHER ================= */}

      <section
        id="weather"
        className="px-6 py-24 md:px-16"
      >

        <p className="text-sm uppercase tracking-[4px] text-orange-400">
          Live Weather
        </p>

        <h2 className="mt-3 text-4xl font-bold">
          Current Weather
        </h2>


        <div className="mt-10 max-w-md rounded-3xl bg-slate-900 p-7">

          <div className="flex items-center justify-between">

            <div>

              <p className="text-gray-400">
                Paris, France
              </p>

              <h3 className="mt-2 text-5xl font-bold">
                24°
              </h3>

              <p className="mt-2 text-gray-400">
                Clear Sky
              </p>

            </div>

            <div className="text-6xl">
              ☀️
            </div>

          </div>


          <div className="mt-8 grid grid-cols-3 text-center">

            <div>
              <p className="text-xs text-gray-500">
                Humidity
              </p>

              <p className="mt-1 font-semibold">
                60%
              </p>
            </div>

            <div>
              <p className="text-xs text-gray-500">
                Wind
              </p>

              <p className="mt-1 font-semibold">
                12 km/h
              </p>
            </div>

            <div>
              <p className="text-xs text-gray-500">
                Feels Like
              </p>

              <p className="mt-1 font-semibold">
                25°
              </p>
            </div>

          </div>

        </div>

      </section>


      {/* ================= FAMOUS PLACES ================= */}

      <section
        id="places"
        className="bg-slate-900 px-6 py-24 md:px-16"
      >

        <p className="text-sm uppercase tracking-[4px] text-orange-400">
          Explore
        </p>

        <h2 className="mt-3 text-4xl font-bold">
          Famous Places
        </h2>


        <div className="mt-10 grid gap-6 md:grid-cols-3">

          {/* Eiffel Tower */}

          <div className="group relative h-96 overflow-hidden rounded-3xl">

            <img
              src="https://images.unsplash.com/photo-1502602898657-3e91760cbb34"
              alt="Eiffel Tower"
              className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent"></div>

            <div className="absolute bottom-6 left-6">

              <p className="text-orange-300">
                Paris
              </p>

              <h3 className="text-3xl font-bold">
                Eiffel Tower
              </h3>

              <p className="mt-2 text-sm text-gray-300">
                One of the most famous landmarks in the world.
              </p>

            </div>

          </div>


          {/* Tokyo */}

          <div className="group relative h-96 overflow-hidden rounded-3xl">

            <img
              src="https://images.unsplash.com/photo-1549693578-d683be217e58"
              alt="Tokyo"
              className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent"></div>

            <div className="absolute bottom-6 left-6">

              <p className="text-orange-300">
                Tokyo
              </p>

              <h3 className="text-3xl font-bold">
                Shibuya Crossing
              </h3>

              <p className="mt-2 text-sm text-gray-300">
                Experience one of Tokyo's most iconic locations.
              </p>

            </div>

          </div>


          {/* Bali */}

          <div className="group relative h-96 overflow-hidden rounded-3xl">

            <img
              src="https://images.unsplash.com/photo-1537996194471-e657df975ab4"
              alt="Bali"
              className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent"></div>

            <div className="absolute bottom-6 left-6">

              <p className="text-orange-300">
                Bali
              </p>

              <h3 className="text-3xl font-bold">
                Uluwatu Temple
              </h3>

              <p className="mt-2 text-sm text-gray-300">
                A beautiful temple overlooking the Indian Ocean.
              </p>

            </div>

          </div>

        </div>

      </section>


      {/* ================= AI ASSISTANT ================= */}

      <section className="px-6 py-24 md:px-16">

        <div className="mx-auto max-w-5xl rounded-[2rem] bg-slate-900 p-10">

          <div className="grid gap-10 md:grid-cols-2">

            <div>

              <span className="rounded-full bg-orange-500/10 px-4 py-2 text-orange-400">
                ✨ AI Travel Assistant
              </span>

              <h2 className="mt-6 text-4xl font-bold">
                Your personal travel assistant.
              </h2>

              <p className="mt-5 leading-7 text-gray-400">
                Ask questions about destinations, places to visit,
                best travel times and trip duration.
              </p>

              <button
                onClick={() => setShowPlanner(true)}
                className="mt-7 rounded-full bg-orange-500 px-7 py-3 font-semibold text-black"
              >
                Plan With AI ✨
              </button>

            </div>


            <div className="rounded-3xl bg-slate-950 p-6">

              <div className="space-y-4">

                <div className="max-w-xs rounded-2xl bg-slate-800 p-4 text-sm">
                  How many days should I spend in Paris?
                </div>

                <div className="ml-auto max-w-xs rounded-2xl bg-orange-500 p-4 text-sm text-black">
                  I recommend spending 4–5 days in Paris.
                </div>

                <div className="max-w-xs rounded-2xl bg-slate-800 p-4 text-sm">
                  What should I see?
                </div>

              </div>

            </div>

          </div>

        </div>

      </section>


      {/* ================= ITINERARY ================= */}

      <section
        id="itinerary"
        className="bg-slate-900 px-6 py-24 md:px-16"
      >

        <div className="mx-auto max-w-5xl">

          <div className="text-center">

            <p className="text-sm uppercase tracking-[4px] text-orange-400">
              AI Trip Planner
            </p>

            <h2 className="mt-3 text-4xl font-bold">
              Your trip, planned day by day.
            </h2>

            {!trip && (
              <button
                onClick={() => setShowPlanner(true)}
                className="mt-7 rounded-full bg-orange-500 px-8 py-3 font-semibold text-black hover:bg-orange-600"
              >
                Generate Itinerary ✨
              </button>
            )}

          </div>


          {/* ================= GENERATED TRIP ================= */}

          {trip && (

            <div className="mt-14">

              {/* TRIP SUMMARY */}

              <div className="rounded-3xl bg-orange-500 p-8 text-black">

                <p className="text-sm font-semibold uppercase tracking-[3px]">
                  Your Trip
                </p>

                <h3 className="mt-3 text-4xl font-bold">
                  ✈️ {trip.destination}
                </h3>

                <div className="mt-5 flex flex-wrap gap-3">

                  <span className="rounded-full bg-black px-5 py-2 text-sm text-white">
                    {trip.days} Days
                  </span>

                  <span className="rounded-full bg-black px-5 py-2 text-sm text-white">
                    {trip.travelStyle}
                  </span>

                  {trip.interests && (
                    <span className="rounded-full bg-black px-5 py-2 text-sm text-white">
                      ❤️ {trip.interests}
                    </span>
                  )}

                </div>

              </div>


              {/* ITINERARY TITLE */}

              <div className="mt-12">

                <h3 className="text-3xl font-bold">
                  Your Itinerary
                </h3>

                <p className="mt-2 text-gray-400">
                  A personalized {trip.days}-day plan for{" "}
                  {trip.destination}.
                </p>

              </div>


              {/* DAY 1 */}

              <div className="mt-8 rounded-3xl bg-slate-950 p-7">

                <div className="flex gap-5">

                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-orange-500 font-bold text-black">
                    01
                  </div>

                  <div>

                    <h4 className="text-xl font-bold">
                      Day 1 — Arrival & Exploration
                    </h4>

                    <div className="mt-5 space-y-3 text-sm text-gray-400">

                      <p>09:00 — Breakfast at a local cafe</p>

                      <p>
                        11:00 — Explore {trip.destination} city center
                      </p>

                      <p>14:00 — Local lunch experience</p>

                      <p>
                        16:00 — Visit a famous landmark
                      </p>

                      <p>19:00 — Dinner and evening walk</p>

                    </div>

                  </div>

                </div>

              </div>


              {/* DAY 2 */}

              {trip.days >= 2 && (

                <div className="mt-5 rounded-3xl bg-slate-950 p-7">

                  <div className="flex gap-5">

                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-orange-500 font-bold text-black">
                      02
                    </div>

                    <div>

                      <h4 className="text-xl font-bold">
                        Day 2 — Famous Places
                      </h4>

                      <div className="mt-5 space-y-3 text-sm text-gray-400">

                        <p>09:00 — Breakfast</p>

                        <p>
                          10:00 — Visit famous attractions
                        </p>

                        <p>13:00 — Lunch</p>

                        <p>
                          15:00 — Explore cultural places
                        </p>

                        <p>19:00 — Evening sightseeing</p>

                      </div>

                    </div>

                  </div>

                </div>

              )}


              {/* DAY 3 */}

              {trip.days >= 3 && (

                <div className="mt-5 rounded-3xl bg-slate-950 p-7">

                  <div className="flex gap-5">

                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-orange-500 font-bold text-black">
                      03
                    </div>

                    <div>

                      <h4 className="text-xl font-bold">
                        Day 3 — Culture & Food
                      </h4>

                      <div className="mt-5 space-y-3 text-sm text-gray-400">

                        <p>09:00 — Local breakfast</p>

                        <p>10:30 — Explore cultural attractions</p>

                        <p>13:30 — Try local cuisine</p>

                        <p>15:30 — Visit local markets</p>

                        <p>19:30 — Traditional dinner</p>

                      </div>

                    </div>

                  </div>

                </div>

              )}


              {/* DAY 4 */}

              {trip.days >= 4 && (

                <div className="mt-5 rounded-3xl bg-slate-950 p-7">

                  <div className="flex gap-5">

                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-orange-500 font-bold text-black">
                      04
                    </div>

                    <div>

                      <h4 className="text-xl font-bold">
                        Day 4 — Adventure
                      </h4>

                      <div className="mt-5 space-y-3 text-sm text-gray-400">

                        <p>09:00 — Breakfast</p>

                        <p>10:00 — Outdoor activity</p>

                        <p>13:00 — Lunch</p>

                        <p>15:00 — Discover hidden gems</p>

                        <p>19:00 — Sunset experience</p>

                      </div>

                    </div>

                  </div>

                </div>

              )}


              {/* PLAN ANOTHER TRIP */}

              <div className="mt-10 text-center">

                <button
                  onClick={() => setShowPlanner(true)}
                  className="rounded-full border border-orange-500 px-7 py-3 font-semibold text-orange-400 transition hover:bg-orange-500 hover:text-black"
                >
                  Plan Another Trip
                </button>

              </div>

            </div>

          )}

        </div>

      </section>


      {/* ================= FOOTER ================= */}

      <footer className="border-t border-slate-800 px-6 py-10 md:px-16">

        <div className="flex flex-col justify-between gap-5 md:flex-row">

          <h2 className="text-xl font-bold">
            Wander<span className="text-orange-400">ly</span>
          </h2>

          <p className="text-sm text-gray-500">
            Explore more. Travel better. ✈️
          </p>

        </div>

      </footer>


      {/* ================================================= */}
      {/*                 PLAN MY TRIP MODAL                */}
      {/* ================================================= */}

      {showPlanner && (

        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 px-5">

          <div className="max-h-[90vh] w-full max-w-lg overflow-y-auto rounded-3xl bg-white p-8 text-black shadow-2xl">

            {/* HEADER */}

            <div className="flex items-center justify-between">

              <div>

                <p className="text-sm font-semibold text-orange-500">
                  AI TRAVEL PLANNER
                </p>

                <h2 className="mt-1 text-2xl font-bold">
                  Plan Your Trip ✈️
                </h2>

              </div>

              <button
                onClick={() => setShowPlanner(false)}
                className="text-3xl text-gray-400 hover:text-black"
              >
                ×
              </button>

            </div>


            <p className="mt-3 text-gray-500">
              Tell us about your trip and we'll create a personalized
              itinerary.
            </p>


            {/* FORM */}

            <div className="mt-7 space-y-5">

              {/* DESTINATION */}

              <div>

                <label className="mb-2 block text-sm font-semibold">
                  Destination *
                </label>

                <input
                  type="text"
                  placeholder="Example: Paris"
                  value={destination}
                  onChange={(e) =>
                    setDestination(e.target.value)
                  }
                  className="w-full rounded-xl border border-gray-200 px-4 py-3 outline-none focus:border-orange-500"
                />

              </div>


              {/* DAYS */}

              <div>

                <label className="mb-2 block text-sm font-semibold">
                  Number of Days *
                </label>

                <input
                  type="number"
                  min="1"
                  placeholder="Example: 5"
                  value={days}
                  onChange={(e) =>
                    setDays(e.target.value)
                  }
                  className="w-full rounded-xl border border-gray-200 px-4 py-3 outline-none focus:border-orange-500"
                />

              </div>


              {/* TRAVEL STYLE */}

              <div>

                <label className="mb-2 block text-sm font-semibold">
                  Travel Style *
                </label>

                <select
                  value={travelStyle}
                  onChange={(e) =>
                    setTravelStyle(e.target.value)
                  }
                  className="w-full rounded-xl border border-gray-200 px-4 py-3 outline-none focus:border-orange-500"
                >

                  <option value="">
                    Select travel style
                  </option>

                  <option value="Adventure">
                    Adventure
                  </option>

                  <option value="Relaxation">
                    Relaxation
                  </option>

                  <option value="Culture">
                    Culture
                  </option>

                  <option value="Food & Lifestyle">
                    Food & Lifestyle
                  </option>

                  <option value="Family">
                    Family
                  </option>

                </select>

              </div>


              {/* INTERESTS */}

              <div>

                <label className="mb-2 block text-sm font-semibold">
                  Interests
                </label>

                <input
                  type="text"
                  placeholder="Food, beaches, museums..."
                  value={interests}
                  onChange={(e) =>
                    setInterests(e.target.value)
                  }
                  className="w-full rounded-xl border border-gray-200 px-4 py-3 outline-none focus:border-orange-500"
                />

              </div>


              {/* GENERATE */}

              <button
                onClick={generateTrip}
                className="w-full rounded-xl bg-orange-500 py-4 font-semibold text-black transition hover:bg-orange-600"
              >
                Generate My Itinerary ✨
              </button>

            </div>

          </div>

        </div>

      )}

    </div>
  );
}

export default Travel;
