import { useState } from "react";

function Travel() {
  // ================= STATES =================

  const [search, setSearch] = useState("");
  const [showPlanner, setShowPlanner] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);

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

  const filteredDestinations = destinations.filter((item) =>
    item.name.toLowerCase().includes(search.toLowerCase())
  );

  // ================= GENERATE TRIP =================

  const generateTrip = () => {
    if (!destination || !days || !travelStyle) {
      alert("Please enter destination, number of days and travel style.");
      return;
    }

    setTrip({
      destination,
      days: Number(days),
      travelStyle,
      interests,
    });

    setShowPlanner(false);

    setTimeout(() => {
      document.getElementById("itinerary")?.scrollIntoView({
        behavior: "smooth",
      });
    }, 200);
  };

  // ================= NAVIGATION =================

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
    });

    setMobileMenu(false);
  };

  // ================= RENDER =================

  return (
    <div className="min-h-screen overflow-x-hidden bg-slate-950 text-white">

      {/* ================= NAVBAR ================= */}

      <nav className="absolute left-0 right-0 top-0 z-40 px-4 py-4 sm:px-6 sm:py-5 lg:px-10 lg:py-6">

        <div className="mx-auto flex max-w-7xl items-center justify-between">

          {/* LOGO */}

          <button
            onClick={() => scrollToSection("home")}
            className="text-2xl font-bold sm:text-3xl"
          >
            Wander
            <span className="text-orange-400">ly</span>
          </button>

          {/* DESKTOP NAVIGATION */}

          <div className="hidden items-center gap-6 md:flex lg:gap-8">

            <button
              onClick={() => scrollToSection("destinations")}
              className="transition hover:text-orange-400"
            >
              Destinations
            </button>

            <button
              onClick={() => scrollToSection("places")}
              className="transition hover:text-orange-400"
            >
              Places
            </button>

            <button
              onClick={() => scrollToSection("weather")}
              className="transition hover:text-orange-400"
            >
              Weather
            </button>

            <button
              onClick={() => scrollToSection("itinerary")}
              className="transition hover:text-orange-400"
            >
              Itinerary
            </button>

          </div>

          {/* DESKTOP PLAN BUTTON */}

          <button
            onClick={() => setShowPlanner(true)}
            className="hidden rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-black transition hover:bg-orange-400 sm:px-6 sm:py-3 md:block"
          >
            Plan My Trip
          </button>

          {/* MOBILE BUTTONS */}

          <div className="flex items-center gap-2 md:hidden">

            <button
              onClick={() => setShowPlanner(true)}
              className="rounded-full bg-white px-4 py-2 text-xs font-semibold text-black sm:px-5 sm:text-sm"
            >
              Plan Trip
            </button>

            <button
              onClick={() => setMobileMenu(!mobileMenu)}
              className="rounded-lg border border-white/30 px-3 py-2 text-xl"
              aria-label="Open menu"
            >
              {mobileMenu ? "×" : "☰"}
            </button>

          </div>

        </div>

        {/* MOBILE MENU */}

        {mobileMenu && (
          <div className="mx-auto mt-4 max-w-7xl rounded-2xl bg-slate-900/95 p-5 shadow-xl backdrop-blur md:hidden">

            <div className="flex flex-col gap-4">

              <button
                onClick={() => scrollToSection("destinations")}
                className="rounded-lg p-3 text-left hover:bg-slate-800"
              >
                Destinations
              </button>

              <button
                onClick={() => scrollToSection("places")}
                className="rounded-lg p-3 text-left hover:bg-slate-800"
              >
                Places
              </button>

              <button
                onClick={() => scrollToSection("weather")}
                className="rounded-lg p-3 text-left hover:bg-slate-800"
              >
                Weather
              </button>

              <button
                onClick={() => scrollToSection("itinerary")}
                className="rounded-lg p-3 text-left hover:bg-slate-800"
              >
                Itinerary
              </button>

            </div>

          </div>
        )}

      </nav>

      {/* ================= HERO ================= */}

      <section
        id="home"
        className="relative flex min-h-screen items-center overflow-hidden"
      >

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

        {/* OVERLAY */}

        <div className="absolute inset-0 bg-black/60" />

        {/* HERO CONTENT */}

        <div className="relative z-10 mx-auto w-full max-w-7xl px-4 pt-24 text-center sm:px-6 md:pt-20 lg:px-10">

          <div className="mx-auto max-w-4xl">

            <p className="mb-4 text-xs uppercase tracking-[3px] text-orange-300 sm:mb-5 sm:text-sm sm:tracking-[5px]">
              Explore the world
            </p>

            <h1 className="text-4xl font-bold leading-tight sm:text-5xl md:text-6xl lg:text-7xl">

              Your next adventure
              <br />

              <span className="text-orange-400">
                starts here.
              </span>

            </h1>

            <p className="mx-auto mt-5 max-w-2xl text-sm leading-6 text-gray-200 sm:mt-6 sm:text-base md:text-lg">
              Discover amazing destinations, check real-time weather,
              explore famous places and create your perfect itinerary.
            </p>

            {/* SEARCH */}

            <div className="mx-auto mt-7 flex w-full max-w-2xl flex-col gap-2 rounded-2xl bg-white p-2 sm:mt-10 sm:flex-row sm:rounded-full">

              <input
                type="text"
                placeholder="Where do you want to go?"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="min-w-0 flex-1 rounded-xl px-4 py-3 text-sm text-black outline-none sm:rounded-full sm:px-6 sm:text-base"
              />

              <button
                onClick={() => scrollToSection("destinations")}
                className="w-full rounded-xl bg-orange-500 px-6 py-3 font-semibold text-black transition hover:bg-orange-600 sm:w-auto sm:rounded-full sm:px-7"
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
        className="px-4 py-16 sm:px-6 sm:py-20 md:px-10 md:py-24 lg:px-16"
      >

        <div className="mx-auto max-w-7xl">

          <p className="text-xs uppercase tracking-[3px] text-orange-400 sm:text-sm sm:tracking-[4px]">
            Discover
          </p>

          <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
            Popular Destinations
          </h2>

          <p className="mt-3 max-w-2xl text-sm leading-6 text-gray-400 sm:mt-4 sm:text-base">
            Explore some of the most beautiful destinations around the world.
          </p>

          {/* DESTINATION GRID */}

          <div className="mt-8 grid gap-5 sm:mt-10 sm:grid-cols-2 lg:grid-cols-4">

            {filteredDestinations.length > 0 ? (
              filteredDestinations.map((destination) => (

                <div
                  key={destination.name}
                  className="group overflow-hidden rounded-3xl bg-slate-900"
                >

                  <div className="relative h-72 overflow-hidden sm:h-80">

                    <img
                      src={destination.image}
                      alt={destination.name}
                      className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 to-transparent" />

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
                      className="mt-5 text-sm font-semibold text-orange-400 transition hover:text-orange-300"
                    >
                      Plan this trip →
                    </button>

                  </div>

                </div>

              ))
            ) : (
              <div className="col-span-full rounded-2xl bg-slate-900 p-8 text-center text-gray-400">
                No destination found.
              </div>
            )}

          </div>

        </div>

      </section>

      {/* ================= LOCATION ================= */}

      <section className="px-4 py-12 sm:px-6 sm:py-16 md:px-10 lg:px-16">

        <div className="mx-auto grid max-w-7xl gap-8 rounded-[2rem] bg-orange-500 p-6 sm:p-8 md:grid-cols-2 md:gap-10 md:p-12 lg:p-16">

          {/* LOCATION INFO */}

          <div>

            <p className="text-xs font-semibold uppercase tracking-[2px] text-orange-950 sm:text-sm sm:tracking-[3px]">
              Location Awareness
            </p>

            <h2 className="mt-3 text-3xl font-bold text-black sm:mt-4 sm:text-4xl">
              Discover places around you.
            </h2>

            <p className="mt-4 text-sm leading-6 text-orange-950 sm:mt-5 sm:text-base">
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

                    alert("Location detected successfully!");
                  },
                  () => {
                    alert("Unable to access your location.");
                  }
                );
              }}
              className="mt-6 w-full rounded-full bg-black px-7 py-3 font-semibold text-white transition hover:bg-slate-800 sm:w-auto"
            >
              Use My Location
            </button>

          </div>

          {/* LOCATION SEARCH */}

          <div className="rounded-3xl bg-black/10 p-5 sm:p-8">

            <h3 className="text-xl font-bold text-black sm:text-2xl">
              Choose a location
            </h3>

            <div className="mt-5 flex flex-col gap-2 rounded-2xl bg-white p-2 sm:flex-row sm:rounded-full">

              <input
                type="text"
                placeholder="Search city..."
                className="min-w-0 flex-1 rounded-xl px-4 py-3 text-black outline-none sm:rounded-full sm:px-5"
              />

              <button className="rounded-xl bg-black px-6 py-3 text-white sm:rounded-full">
                Search
              </button>

            </div>

          </div>

        </div>

      </section>

      {/* ================= WEATHER ================= */}

      <section
        id="weather"
        className="px-4 py-16 sm:px-6 sm:py-20 md:px-10 md:py-24 lg:px-16"
      >

        <div className="mx-auto max-w-7xl">

          <p className="text-xs uppercase tracking-[3px] text-orange-400 sm:text-sm sm:tracking-[4px]">
            Live Weather
          </p>

          <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
            Current Weather
          </h2>

          <div className="mt-8 w-full max-w-md rounded-3xl bg-slate-900 p-6 sm:mt-10 sm:p-7">

            <div className="flex items-center justify-between gap-4">

              <div>

                <p className="text-sm text-gray-400">
                  Paris, France
                </p>

                <h3 className="mt-2 text-4xl font-bold sm:text-5xl">
                  24°
                </h3>

                <p className="mt-2 text-sm text-gray-400">
                  Clear Sky
                </p>

              </div>

              <div className="text-5xl sm:text-6xl">
                ☀️
              </div>

            </div>

            <div className="mt-8 grid grid-cols-3 text-center">

              <div>
                <p className="text-xs text-gray-500">
                  Humidity
                </p>

                <p className="mt-1 text-sm font-semibold sm:text-base">
                  60%
                </p>
              </div>

              <div>
                <p className="text-xs text-gray-500">
                  Wind
                </p>

                <p className="mt-1 text-sm font-semibold sm:text-base">
                  12 km/h
                </p>
              </div>

              <div>
                <p className="text-xs text-gray-500">
                  Feels Like
                </p>

                <p className="mt-1 text-sm font-semibold sm:text-base">
                  25°
                </p>
              </div>

            </div>

          </div>

        </div>

      </section>

      {/* ================= FAMOUS PLACES ================= */}

      <section
        id="places"
        className="bg-slate-900 px-4 py-16 sm:px-6 sm:py-20 md:px-10 md:py-24 lg:px-16"
      >

        <div className="mx-auto max-w-7xl">

          <p className="text-xs uppercase tracking-[3px] text-orange-400 sm:text-sm sm:tracking-[4px]">
            Explore
          </p>

          <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
            Famous Places
          </h2>

          <div className="mt-8 grid gap-5 sm:mt-10 md:grid-cols-2 lg:grid-cols-3">

            {/* EIFFEL TOWER */}

            <div className="group relative h-80 overflow-hidden rounded-3xl sm:h-96">

              <img
                src="https://images.unsplash.com/photo-1502602898657-3e91760cbb34"
                alt="Eiffel Tower"
                className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent" />

              <div className="absolute bottom-6 left-5 right-5 sm:left-6">

                <p className="text-orange-300">
                  Paris
                </p>

                <h3 className="text-2xl font-bold sm:text-3xl">
                  Eiffel Tower
                </h3>

                <p className="mt-2 text-sm text-gray-300">
                  One of the most famous landmarks in the world.
                </p>

              </div>

            </div>

            {/* TOKYO */}

            <div className="group relative h-80 overflow-hidden rounded-3xl sm:h-96">

              <img
                src="https://images.unsplash.com/photo-1549693578-d683be217e58"
                alt="Tokyo"
                className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent" />

              <div className="absolute bottom-6 left-5 right-5 sm:left-6">

                <p className="text-orange-300">
                  Tokyo
                </p>

                <h3 className="text-2xl font-bold sm:text-3xl">
                  Shibuya Crossing
                </h3>

                <p className="mt-2 text-sm text-gray-300">
                  Experience one of Tokyo's most iconic locations.
                </p>

              </div>

            </div>

            {/* BALI */}

            <div className="group relative h-80 overflow-hidden rounded-3xl sm:h-96 md:col-span-2 lg:col-span-1">

              <img
                src="https://images.unsplash.com/photo-1537996194471-e657df975ab4"
                alt="Bali"
                className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent" />

              <div className="absolute bottom-6 left-5 right-5 sm:left-6">

                <p className="text-orange-300">
                  Bali
                </p>

                <h3 className="text-2xl font-bold sm:text-3xl">
                  Uluwatu Temple
                </h3>

                <p className="mt-2 text-sm text-gray-300">
                  A beautiful temple overlooking the Indian Ocean.
                </p>

              </div>

            </div>

          </div>

        </div>

      </section>

      {/* ================= AI ASSISTANT ================= */}

      <section className="px-4 py-16 sm:px-6 sm:py-20 md:px-10 md:py-24 lg:px-16">

        <div className="mx-auto max-w-5xl rounded-[2rem] bg-slate-900 p-6 sm:p-8 md:p-10">

          <div className="grid gap-8 md:grid-cols-2 md:gap-10">

            <div>

              <span className="inline-block rounded-full bg-orange-500/10 px-4 py-2 text-sm text-orange-400">
                ✨ AI Travel Assistant
              </span>

              <h2 className="mt-5 text-3xl font-bold sm:text-4xl">
                Your personal travel assistant.
              </h2>

              <p className="mt-4 text-sm leading-7 text-gray-400 sm:mt-5 sm:text-base">
                Ask questions about destinations, places to visit,
                best travel times and trip duration.
              </p>

              <button
                onClick={() => setShowPlanner(true)}
                className="mt-6 rounded-full bg-orange-500 px-6 py-3 font-semibold text-black transition hover:bg-orange-600 sm:mt-7 sm:px-7"
              >
                Plan With AI ✨
              </button>

            </div>

            {/* CHAT */}

            <div className="rounded-3xl bg-slate-950 p-5 sm:p-6">

              <div className="space-y-4">

                <div className="max-w-[85%] rounded-2xl bg-slate-800 p-4 text-sm sm:max-w-xs">
                  How many days should I spend in Paris?
                </div>

                <div className="ml-auto max-w-[85%] rounded-2xl bg-orange-500 p-4 text-sm text-black sm:max-w-xs">
                  I recommend spending 4–5 days in Paris.
                </div>

                <div className="max-w-[85%] rounded-2xl bg-slate-800 p-4 text-sm sm:max-w-xs">
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
        className="bg-slate-900 px-4 py-16 sm:px-6 sm:py-20 md:px-10 md:py-24 lg:px-16"
      >

        <div className="mx-auto max-w-5xl">

          <div className="text-center">

            <p className="text-xs uppercase tracking-[3px] text-orange-400 sm:text-sm sm:tracking-[4px]">
              AI Trip Planner
            </p>

            <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
              Your trip, planned day by day.
            </h2>

            {!trip && (
              <button
                onClick={() => setShowPlanner(true)}
                className="mt-6 rounded-full bg-orange-500 px-7 py-3 font-semibold text-black transition hover:bg-orange-600 sm:mt-7 sm:px-8"
              >
                Generate Itinerary ✨
              </button>
            )}

          </div>

          {/* GENERATED TRIP */}

          {trip && (

            <div className="mt-10 sm:mt-14">

              {/* TRIP SUMMARY */}

              <div className="rounded-3xl bg-orange-500 p-6 text-black sm:p-8">

                <p className="text-xs font-semibold uppercase tracking-[2px] sm:text-sm sm:tracking-[3px]">
                  Your Trip
                </p>

                <h3 className="mt-3 text-3xl font-bold sm:text-4xl">
                  ✈️ {trip.destination}
                </h3>

                <div className="mt-5 flex flex-wrap gap-2 sm:gap-3">

                  <span className="rounded-full bg-black px-4 py-2 text-xs text-white sm:px-5 sm:text-sm">
                    {trip.days} Days
                  </span>

                  <span className="rounded-full bg-black px-4 py-2 text-xs text-white sm:px-5 sm:text-sm">
                    {trip.travelStyle}
                  </span>

                  {trip.interests && (
                    <span className="rounded-full bg-black px-4 py-2 text-xs text-white sm:px-5 sm:text-sm">
                      ❤️ {trip.interests}
                    </span>
                  )}

                </div>

              </div>

              {/* ITINERARY TITLE */}

              <div className="mt-10 sm:mt-12">

                <h3 className="text-2xl font-bold sm:text-3xl">
                  Your Itinerary
                </h3>

                <p className="mt-2 text-sm text-gray-400 sm:text-base">
                  A personalized {trip.days}-day plan for{" "}
                  {trip.destination}.
                </p>

              </div>

              {/* DAY 1 */}

              <div className="mt-6 rounded-3xl bg-slate-950 p-5 sm:mt-8 sm:p-7">

                <div className="flex items-start gap-4 sm:gap-5">

                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-orange-500 text-sm font-bold text-black sm:h-12 sm:w-12 sm:text-base">
                    01
                  </div>

                  <div className="min-w-0">

                    <h4 className="text-lg font-bold sm:text-xl">
                      Day 1 — Arrival & Exploration
                    </h4>

                    <div className="mt-5 space-y-3 text-sm leading-6 text-gray-400">

                      <p>09:00 — Breakfast at a local cafe</p>

                      <p>
                        11:00 — Explore {trip.destination} city center
                      </p>

                      <p>14:00 — Local lunch experience</p>

                      <p>16:00 — Visit a famous landmark</p>

                      <p>19:00 — Dinner and evening walk</p>

                    </div>

                  </div>

                </div>

              </div>

              {/* DAY 2 */}

              {trip.days >= 2 && (

                <div className="mt-5 rounded-3xl bg-slate-950 p-5 sm:p-7">

                  <div className="flex items-start gap-4 sm:gap-5">

                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-orange-500 text-sm font-bold text-black sm:h-12 sm:w-12 sm:text-base">
                      02
                    </div>

                    <div className="min-w-0">

                      <h4 className="text-lg font-bold sm:text-xl">
                        Day 2 — Famous Places
                      </h4>

                      <div className="mt-5 space-y-3 text-sm leading-6 text-gray-400">

                        <p>09:00 — Breakfast</p>

                        <p>10:00 — Visit famous attractions</p>

                        <p>13:00 — Lunch</p>

                        <p>15:00 — Explore cultural places</p>

                        <p>19:00 — Evening sightseeing</p>

                      </div>

                    </div>

                  </div>

                </div>

              )}

              {/* DAY 3 */}

              {trip.days >= 3 && (

                <div className="mt-5 rounded-3xl bg-slate-950 p-5 sm:p-7">

                  <div className="flex items-start gap-4 sm:gap-5">

                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-orange-500 text-sm font-bold text-black sm:h-12 sm:w-12 sm:text-base">
                      03
                    </div>

                    <div className="min-w-0">

                      <h4 className="text-lg font-bold sm:text-xl">
                        Day 3 — Culture & Food
                      </h4>

                      <div className="mt-5 space-y-3 text-sm leading-6 text-gray-400">

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

                <div className="mt-5 rounded-3xl bg-slate-950 p-5 sm:p-7">

                  <div className="flex items-start gap-4 sm:gap-5">

                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-orange-500 text-sm font-bold text-black sm:h-12 sm:w-12 sm:text-base">
                      04
                    </div>

                    <div className="min-w-0">

                      <h4 className="text-lg font-bold sm:text-xl">
                        Day 4 — Adventure
                      </h4>

                      <div className="mt-5 space-y-3 text-sm leading-6 text-gray-400">

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

              <div className="mt-8 text-center sm:mt-10">

                <button
                  onClick={() => setShowPlanner(true)}
                  className="w-full rounded-full border border-orange-500 px-7 py-3 font-semibold text-orange-400 transition hover:bg-orange-500 hover:text-black sm:w-auto"
                >
                  Plan Another Trip
                </button>

              </div>

            </div>

          )}

        </div>

      </section>

      {/* ================= FOOTER ================= */}

      <footer className="border-t border-slate-800 px-4 py-8 sm:px-6 sm:py-10 md:px-10 lg:px-16">

        <div className="mx-auto flex max-w-7xl flex-col gap-3 text-center sm:gap-5 md:flex-row md:items-center md:justify-between md:text-left">

          <h2 className="text-xl font-bold">
            Wander
            <span className="text-orange-400">ly</span>
          </h2>

          <p className="text-sm text-gray-500">
            Explore more. Travel better. ✈️
          </p>

        </div>

      </footer>

      {/* ================= PLAN MY TRIP MODAL ================= */}

      {showPlanner && (

        <div className="fixed inset-0 z-50 flex items-end justify-center bg-black/70 px-3 sm:items-center sm:px-5">

          <div className="max-h-[92vh] w-full max-w-lg overflow-y-auto rounded-t-3xl bg-white p-5 text-black shadow-2xl sm:rounded-3xl sm:p-8">

            {/* HEADER */}

            <div className="flex items-start justify-between gap-4">

              <div>

                <p className="text-xs font-semibold text-orange-500 sm:text-sm">
                  AI TRAVEL PLANNER
                </p>

                <h2 className="mt-1 text-xl font-bold sm:text-2xl">
                  Plan Your Trip ✈️
                </h2>

              </div>

              <button
                onClick={() => setShowPlanner(false)}
                className="text-3xl leading-none text-gray-400 transition hover:text-black"
              >
                ×
              </button>

            </div>

            <p className="mt-3 text-sm leading-6 text-gray-500">
              Tell us about your trip and we'll create a personalized
              itinerary.
            </p>

            {/* FORM */}

            <div className="mt-6 space-y-5">

              {/* DESTINATION */}

              <div>

                <label className="mb-2 block text-sm font-semibold">
                  Destination *
                </label>

                <input
                  type="text"
                  placeholder="Example: Paris"
                  value={destination}
                  onChange={(e) => setDestination(e.target.value)}
                  className="w-full rounded-xl border border-gray-200 px-4 py-3 text-base outline-none focus:border-orange-500"
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
                  onChange={(e) => setDays(e.target.value)}
                  className="w-full rounded-xl border border-gray-200 px-4 py-3 text-base outline-none focus:border-orange-500"
                />

              </div>

              {/* TRAVEL STYLE */}

              <div>

                <label className="mb-2 block text-sm font-semibold">
                  Travel Style *
                </label>

                <select
                  value={travelStyle}
                  onChange={(e) => setTravelStyle(e.target.value)}
                  className="w-full rounded-xl border border-gray-200 px-4 py-3 text-base outline-none focus:border-orange-500"
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
                  onChange={(e) => setInterests(e.target.value)}
                  className="w-full rounded-xl border border-gray-200 px-4 py-3 text-base outline-none focus:border-orange-500"
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
