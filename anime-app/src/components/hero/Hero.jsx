import React from 'react';

const Hero = () => {
  return (
    <div className="my-6 relative hero-img text-white rounded-xl">
      <div className="absolute top-0 left-0 right-0 bottom-0 bg-black/70 rounded-xl" />
      <div className="p-10 relative z-2">
        <h1 className="font-bold text-2xl mb-4">AnimeApp</h1>
        <p className="mb-2">
          For many years, Japanese animation has been a huge success around the world.
        </p>
        <p>
          Many fans like to watch anime online, but to do this often have to use several sources, as
          none of them can be called universal. But we have great news for anime fans! We have
          launched a new project AnimeApp dedicated to online watching anime. Now you do not have to
          navigate the Internet in search of your favorite title - all the best anime in good
          quality already on our portal. We ourselves love this genre and therefore tried to make
          our site as convenient and exciting as possible.
        </p>
      </div>
    </div>
  );
};

export default Hero;
