import TicketCard from "../components/TicketCard";

function Dashboard() {
  const tickets = [
    {
      category: "Q1 2024",
      color: "red",
      title: "NFT Safety 101 Video",
      owner: "Garrett Stewart",
      avatar:
        "https://pbs.twimg.com/profile_images/1674798090723950597/ES82JCw1_400x400.jpg",
      status: "done",
      priority: 5,
      progress: 48,
      description: "Make a video showcasing how to use NFTs safely",
      timestamp: "2024-01-11T07:36:17+0000",
    },
    {
      category: "Q1 2024",
      color: "red",
      title: "Build Stuff",
      owner: "Garrett Stewart",
      avatar:
        "https://pbs.twimg.com/profile_images/1674798090723950597/ES82JCw1_400x400.jpg",
      status: "working on it",
      priority: 2,
      progress: 10,
      description: "Test Data Description Goes Here",
      timestamp: "2024-01-09T07:36:17+0000",
    },
    {
      category: "Q2 2024",
      color: "blue",
      title: "Build Something",
      owner: "Jim",
      avatar: "",
      status: "stuck",
      priority: 3,
      progress: 69,
      description: "DO IT UP HOMIE",
      timestamp: "2024-01-01T07:36:17+0000",
    },
  ];

  const colors = [
    "rgb(255, 179, 186)",
    "rgb(255, 223, 186)",
    "rgb(255, 255, 186)",
    "rgb(186, 255, 201)",
    "rgb(186, 255, 255)",
  ];

  const uniqueCategories = [
    ...new Set(tickets?.map(({ category }) => category)),
  ];

  return (
    <div className="dashboard">
      <h1>My Projects</h1>
      <div className="ticket-container">
        {tickets &&
          uniqueCategories?.map((uniqueCategory, categoryIndex) => (
            <div>
              <h3>{uniqueCategory}</h3>
              {tickets
                .filter((ticket) => ticket.category === uniqueCategory)
                .map((filteredTicket, _index) => (
                  <TicketCard
                    id={_index}
                    color={colors[categoryIndex] || colors[0]}
                    ticket={filteredTicket}
                  />
                ))}
            </div>
          ))}
      </div>
    </div>
  );
}

export default Dashboard;
