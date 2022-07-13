const About = ({anime}) => {
  return (
    <div>
      <div>
        <ul>
          {anime.data.map(item => (
            <li></li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default About;

export const getStaticProps = async () => {
  const res = await fetch('https://kitsu.io/api/edge/anime');
  const data = await res.json();

  return {
    props: {
      anime: data,
    },
  };
};
