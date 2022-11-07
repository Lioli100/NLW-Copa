export const getServerSideProps = async () => {
  const poolCountResponse = await fetch("http://localhost:3333/pools/count");
  const data = await poolCountResponse.json();

  const guessCountResponse = await fetch("http://localhost:3333/guesses/count");
  const dataguesse = await guessCountResponse.json();

  const userCountResponse = await fetch("http://localhost:3333/users/count");
  const datauser = await userCountResponse.json();

  return {
    data,
    dataguesse,
    datauser,
  };
};
