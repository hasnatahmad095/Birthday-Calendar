import { useState } from "react"
// import './New.css'

const data = [
  {
    id: 1,
    name: 'Bertie Yates',
    date: 1,
    month: 'January',
    year: 2001,
    age: 22,
    image:
      'https://res.cloudinary.com/diqqf3eq2/image/upload/v1595959131/person-2_ipcjws.jpg',
  },
  {
    id: 2,
    name: 'Hester Hogan',
    date: 10,
    month: 'February',
    year: 2001,
    age: 32,
    image:
      'https://res.cloudinary.com/diqqf3eq2/image/upload/v1595959131/person-3_rxtqvi.jpg',
  },
  {
    id: 3,
    name: 'Larry Little',
    date: 1,
    month: 'January',
    year: 2001,
    age: 36,
    image:
      'https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883423/person-4_t9nxjt.jpg',
  },
  {
    id: 4,
    name: 'Sean Walsh',
    date: 1,
    month: 'January',
    year: 2001,
    age: 34,
    image:
      'https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883417/person-3_ipa0mj.jpg',
  },
  {
    id: 5,
    name: 'Lola Gardner',
    date: 22,
    month: 'June',
    year: 2001,
    age: 29,
    image:
      'https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883334/person-1_rfzshl.jpg',
  },
  // Rest of the data objects...
]

function List({ people }) {
  return (
    <>
      {people.map(person => {
        const { id, name, age, image, date, month } = person;
        return (
          <article key={id} className="person">
            <img src={image} alt={name} />
            <div>
              <h4>{name}</h4>
              <p>{age} years</p>
              <p>Date of Birth: {date} {month}</p>
            </div>
          </article>
        );
      })}
    </>
  );
}

function FilterData() {
  const [people, setPeople] = useState(data);

  // Filter function to find people whose birthday is within the next week
  const filterByNextWeekBirthday = () => {
    //   const date = new Date();
    const today1 = new Date();
    const today2 = new Date().getDate();
    const nextWeek = new Date(today1.getTime() + 7 * 24 * 60 * 60 * 1000).getDate();

    const filteredPeople = data.filter(person => {
      // console.log(person);
      const personBirthday = new Date(person.year, getMonthIndex(person.month), person.date).getDate();
      console.log(personBirthday);
      return personBirthday >= today2 && personBirthday <= nextWeek;
    });

    setPeople(filteredPeople);
  };
  console.log(people);

  // Utility function to get the month index (0 - January, 1 - February, etc.)
  const getMonthIndex = month => {
    const monthNames = [
      'January',
      'February',
      'March',
      'April',
      'May',
      'June',
      'July',
      'August',
      'September',
      'October',
      'November',
      'December'
    ];
    return monthNames.findIndex(m => m === month);
  };

  return (
    <main>
      <section className="container">
        <h2 className="title">{people.length} birthdays today</h2>
        <List people={people} />

        <button onClick={() => setPeople([])}>
          Clear All
        </button>
        <button onClick={filterByNextWeekBirthday}>
          Filter by Next Week's Birthday
        </button>
      </section>
    </main>
  );
}

export default FilterData;