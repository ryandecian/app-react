interface NavBarProps {
    items: {
      name: string;
      id: number;
    }[];
    setPokemonIndex: (id: number) => void;
  }
  
  function NavBar(Props: NavBarProps) {
    const { items, setPokemonIndex } = Props;
  
    return (
      <nav>
        {items.map((item) => (
          <button key={item.id} onClick={() => setPokemonIndex(item.id)}>
            {item.name}
          </button>
        ))}
      </nav>
    );
  }
  
  export default NavBar;
  