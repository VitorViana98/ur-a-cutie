import LinkGridCard from "./LinkGridCard";

function LinkGrid() {

  const links = [
    {
      title: "Fotinhas nossas",
      description: "Algumas fotos de momentos que eu amo e nao queria esquecer",
      link: "https://drive.google.com/drive/folders/1UkH3xcRjYNx6_aRjJEBTFCCFZwGYXeTs?usp=drive_link",
    },
  ]


  return <><div className="grid">
    {links.map(link => <LinkGridCard title={link.title} description={link.description} link={link.link} />)}
  </div>
    <style jsx>{`
        .grid {
          display: flex;
          align-items: center;
          justify-content: center;
          flex-wrap: wrap;

          max-width: 800px;
          margin-top: 0.5rem;
        }

        @media (max-width: 600px) {
          .grid {
            width: 100%;
            flex-direction: column;
          }
        }
        `}</style>
  </>
}

export default LinkGrid;