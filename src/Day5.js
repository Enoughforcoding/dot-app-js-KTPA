import { useState } from "react";

const SampleList = () => {
  const fruits = ["ໝາກກ້ວຍ", "ໝາກແອັບເປີ້ນ", "ໝາກສົ້ມ", "ໝາກມ່ວງ"];
  return (
    <div>
      <h2>ລາຍການໝາກໄມ້</h2>
      <ul>
        {fruits.map((fruit, index) => (
          <li key={index}>
            {index + 1}. {fruit}
          </li>
        ))}
      </ul>
    </div>
  );
};

const ASEANCoutries = () => {
  const countries = [
    "ລາວ",
    "ໄທ",
    "ຫວຽດນາມ",
    "ກຳປູເຈຍ",
    "ມຽນມາ",
    "ສິງກາໂປ",
    "ມາເລເຊຍ",
    "ອິນໂດເນເຊຍ",
    "ຟິລິບປິນ",
    "ບຣູໄນ",
  ];
  return (
    <div>
      <h2>ປະເທດອາຊຽນ</h2>
      <ul>
        {countries.map((country, index) => (
          <li key={index}>
            {index + 1}. {country}
          </li>
        ))}
      </ul>
    </div>
  );
};

const StudentList = () => {
  const students = [
    {
      name: "ສົມສະໜຸກ",
      class: "C1",
      gender: "MALE",
    },
    {
      name: "ສົມຫວັງ",
      class: "A1",
      gender: "MALE",
    },
    {
      name: "ສົມສີ",
      class: "A1",
      gender: "FEMALE",
    },
  ];
  return (
    <div>
      <h2>ລາຍຊື່ນັກຮຽນ</h2>
      <ul>
        {students
          .filter(
            (student) => student.class === "A1" && student.gender === "FEMALE"
          )
          .map((student, index) => (
            <li key={index}>
              {index + 1}. {student.name}, ຫ້ອງ {student.class}
            </li>
          ))}
      </ul>
    </div>
  );
};

const TodoList = () => {
  const [todos, setTodos] = useState([
    {
      text: "ຮຽນ React",
      completed: false,
    },
    {
      text: "ສ້າງ To-do app",
      completed: false,
    },
    {
      text: "ຝຶກຫັດໃຊ້ Lists & Keys",
      completed: true,
    },
  ]);
  const [newTodo, setNewTodo] = useState("");

  const onToggleTodo = (index) => {
    const newTodos = [...todos];
    newTodos[index].completed = !newTodos[index].completed;
    setTodos(newTodos);
  };

  const addTodo = (e) => {
    e.preventDefault();
    setTodos([...todos, { text: newTodo, completed: false }]);
    setNewTodo("");
  };

  return (
    <div>
      <h2>ລາຍການສິ່ງທີ່ຕ້ອງເຮັດ</h2>
      <form onSubmit={addTodo}>
        <input
          onChange={(event) => setNewTodo(event.target.value)}
          value={newTodo}
          type="text"
          placeholder="ເພີ່ມລາຍການໃຫມ່..."
        ></input>
        <button type="submit">ເພີ່ມ</button>
      </form>
      <ul>
        {todos.map((todo, index) => (
          <li
            onClick={() => onToggleTodo(index)}
            key={index}
            style={{ textDecoration: todo.completed ? "line-through" : "none" }}
          >
            {todo.text}
          </li>
        ))}
      </ul>
    </div>
  );
};

const ImageCarousel = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };
  return (
    <div className="carousel">
      <button className="carousel-button prev" onClick={prevSlide}>
        &#10094;
      </button>
      {images.map((image, index) => (
        <img
          src={image}
          key={index}
          alt={`Slide ${index + 1}`}
          className={`carousel-image ${index === currentIndex ? "active" : ""}`}
        ></img>
      ))}
      <button className="carousel-button next" onClick={nextSlide}>
        &#10095;
      </button>
    </div>
  );
};

const Day5 = () => {
  const carouselImages = [
   'https://nationaltoday.com/wp-content/uploads/2020/02/doggy-date-night.jpg',
   'https://www.pawlofts.com/wp-content/uploads/2017/06/Paw-Lofts-Doggy-Daycare-2.png'
   
  ]
  return (
    <div className="container">
      <h2>ການສອນ Lists ແລະ Keys ໃນ React</h2>
      <hr></hr>
      <SampleList></SampleList>
      <hr></hr>
      <ASEANCoutries></ASEANCoutries>
      <hr></hr>
      <StudentList></StudentList>
      <hr></hr>
      <TodoList></TodoList>
      <hr></hr>
      <ImageCarousel images={carouselImages}></ImageCarousel>
      <style jsx>{`
        .container {
          max-width: 600px;
          margin: 0 auto;
          padding: 20px;
          display: flex;
          flex-direction: column;
          align-items: start;
          min-height: 100vh;
          background-color: white;
          text-align: start;
        }
        ul {
          list-style-type: none;
          padding: 0;
        }
        li {
          margin-bottom: 10px;
          padding: 10px;
          background-color: #f0f0f0;
          border-radius: 5px;
        }
        button {
          margin-left: 10px;
          cursor: pointer;
          padding: 5px 10px;
          background-color: #ff4444;
          color: white;
          border: none;
          border-radius: 3px;
        }
        hr {
          color: black;
          width: 100%;
        }
        .carousel {
          position: relative;
          width: 100%
          max-width: 600px;
          margin: 0 auto;
        }
        .carousel-image {
          width: 100%;
          height: auto;
          display: none;
        }
        .carousel-image.active {
          display: block;
        }
        .carousel-button {
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          background-color: rgba(0, 0, 0, 0.5);
          color: white;
          border: none;
          padding: 10px 15px;
          cursor: pointer;
          font-size: 18px;
        }
        .prev {
          left: 10px;
        }
        .next {
          right: 10px;
        }
      `}</style>
    </div>
  );
};

export default Day5;
