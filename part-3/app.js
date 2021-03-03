const App = () => {
  return <div>
    <Person
      name="Sean"
      age={ 23 }
      hobbies={ ["Tae Kwon Do", "Scuba Diving", "Watching Movies"] }
    />
    <Person
      name="Johnny"
      age={ 17 }
      hobbies={ ["Skateboarding", "Singing"] }
    />
    <Person
      name="Stanley Kubrick"
      age={ 60 }
      hobbies={ ["Taking Pictures", "Making Movies"] }
    />
  </div>;
};