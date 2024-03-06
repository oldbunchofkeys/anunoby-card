export default function Card({ items }) {
  return (
    <>
      {items.length === 0 ? (
        <div>Loading...</div>
      ) : (
        items.map((item, index) => (
          <div className="card" key={index}>
            <h1>{item.playerName}</h1>
            <img src={item.image.src} alt={item.image.alt} />
            <p>
              OG is averaging
              <code> {item.ppg.totalPpg} </code>
              points per game for the 2023-2024 NBA season and
              <code> {Math.round(item.ppg.knicksPpg * 10) / 10} </code>
              points per game since he&apos;s been on the Knicks.
            </p>
            <p className="read-the-docs">
              Data comes from{" "}
              <a href="https://www.basketball-reference.com/">
                Basketball Reference
              </a>
            </p>
          </div>
        ))
      )}
    </>
  );
}
