import React from "react";
import { useHistory } from "react-router-dom";

const BasePage = (props) => {
  const history = useHistory();
  return (
    <div className="main-component">
      <ul className="nav nav-tabs justify-content-end">
        <li className="nav-item">
          <button
            className="nav-btn student-btn btn"
            onClick={() => history.push("/home")}
          >
            Home
          </button>
        </li>
        <li className="nav-item">
          <button
            className="nav-btn student-btn btn"
            onClick={() => history.push("/students")}
          >
            Students
          </button>
        </li>
        <li className="nav-item">
          <button
            className="nav-btn staffs-btn btn"
            onClick={() => history.push("/staffs")}
          >
            Staffs
          </button>
        </li>

        <li className="nav-item">
          <button
            className="nav-btn spell-btn btn"
            onClick={() => history.push("/add-student")}
          >
            Add Student
          </button>
        </li>
        <li className="nav-item">
          <button
            className="nav-btn spell-btn btn"
            onClick={() => history.push("/add-staff")}
          >
            Add Staff
          </button>
        </li>
        <li className="nav-item">
          <button
            className="nav-btn spell-btn btn"
            onClick={() => history.push("/")}
          >
            Log Out
          </button>
        </li>
      </ul>
      <div className="logo">
        <img
          src="https://www.freeiconspng.com/thumbs/harry-potter-logo/harry-potter-logo-transparent-1.png"
          alt="hp-logo"
        ></img>
      </div>
      <div className="school-name">
      <h2>
        Hogwarts School of Witchcraft and Wizardry
       <span> <img
          className="school-logo"
          src="https://blog.logomyway.com/wp-content/uploads/2021/09/hogwarts-logo-draco.jpg"
          alt="hogwarts"
        ></img></span>
      </h2>
      </div>

      <div className="title">
        <h3>{props.title}</h3>
      </div>
      <div className="description">
        <h4>{props.description}</h4>
      </div>

      <div className="Children">{props.children}</div>

      <div className="about-school">
        <div className="about">
          <h2>About</h2>
          <h6>
            Hogwarts School of Witchcraft and Wizardry is a fictional Scottish
            boarding school of magic for students aged eleven to eighteen, and
            is the primary setting for the first six books in J. K. Rowling's
            Harry Potter series and serves as a major setting in the Wizarding
            World universe.
          </h6>
        </div>

        <div className="about">
          <h2>Establishment</h2>
          <h6>
            Founded in the 10th century by Godric Gryffindor, Rowena Ravenclaw,
            Helga Hufflepuff and Salazar Slytherin, Hogwarts was established in
            the Highlands of Scotland to educate young wizards and witches as
            well as to keep students safe from muggle persecution. Theory has it
            that Rowena Ravenclaw came up with the name of Hogwarts after
            dreaming of a warty hog that led her to a cliff by a lake. Since
            then, Hogwarts educated most wizarding children with residence in
            Great Britain and Ireland, keeping its location hidden from other
            wizarding schools and muggles. About three hundred years after the
            school was founded, the Triwizard Tournament was established as an
            interscholastic competition among the three most prestigious magical
            schools in Europe: Hogwarts, Beauxbatons, and Durmstrang. The
            tournament continued for six centuries before being discontinued. An
            attempt was made in the 1994–1995 school year to revive the
            tournament, but the consequential death of Cedric Diggory resulted
            in its permanent discontinuation
          </h6>
        </div>

        <div className="about">
          <h2>Academics and Traditions</h2>
          <h6>
            Hogwarts is a coeducational, secondary boarding school, taking
            children from ages eleven to seventeen. Education at Hogwarts is not
            compulsory, with some students being home schooled as stated in the
            seventh book. Rowling initially said there are about one thousand
            students at Hogwarts. She later suggested around six hundred, while
            acknowledging that this number was still inconsistent with the small
            number of people in Harry's year. She further explained that this
            had resulted from her creating only 40 characters for Harry's year.
          </h6>
        </div>

        <div className="about">
          <h2>Admission</h2>
          <h6>
            According to the novels, admission to Hogwarts is selective, in that
            children who show magical ability will automatically gain a place,
            and squibs cannot attend the school as students (though they can
            work there in other roles, as Argus Filch does). A magical quill at
            Hogwarts detects the birth of magical children and writes their
            names into a large parchment book, but there is no admission test
            because "you are either magical or you are not." Every year, a
            teacher checks this book and sends a letter to the children who are
            turning eleven. Acceptance or refusal of a place at Hogwarts must be
            posted by 31 July. The letter also contains a list of supplies like
            spell books, uniform, and other things that the student will need.
            The prospective student is expected to buy all the necessary
            materials, normally from shops in Diagon Alley, a concealed street
            near Charing Cross Road in London that can be found behind the
            wizarding pub, The Leaky Cauldron. Students who cannot afford their
            supplies can receive financial aid from the school, as happened with
            the young orphan Tom Riddle. Letters to Muggle-born witches and
            wizards, who may not be aware of their powers and are unfamiliar
            with the concealed wizarding world, are delivered in person by a
            member of Hogwarts staff, who then explains to the parents or
            guardians about magical society, and reassures them regarding this
            news. Though the school is in Great Britain, its catchment area is
            the wider British Isles, as Irish students can also attend. Each
            student is allowed to bring an owl, a cat or a toad. Along with the
            acceptance letter, first-year students are sent a list of required
            equipment which includes a wand, subject books, a standard size 2
            pewter cauldron, a set of brass scales, a set of glass or crystal
            phials, a kit of basic potion ingredients (for Potions), and a
            telescope (for Astronomy). The Hogwarts uniform consists of plain
            work robes in black, a plain black hat, a pair of protective gloves,
            and a black winter cloak with silver fastenings. Each uniform must
            contain the wearer's nametag. First years are not allowed a
            broomstick of their own, though an exception to this rule is made
            for Harry Potter in his first year after he demonstrates an
            excellent ability as a Seeker in Quidditch.
          </h6>
        </div>

        <div className="about">
          <h2>Arrival</h2>
          <h6>
            The primary mode of transport to Hogwarts is the Hogwarts Express
            that students take at the start of each school year. Students board
            the train from the also fictional and hidden Platform 9¾ at King's
            Cross station in London. The train arrives at Hogsmeade station near
            Hogwarts, some time after nightfall. From there, first-year students
            are accompanied by the "Keeper of the Keys, Game and Grounds" (which
            was Hagrid during the first novel) to small boats, which magically
            sail across the lake and get them near the entrance of Hogwarts. The
            older students ride up to the castle in carriages pulled by
            creatures called Thestrals. When the first-year students initially
            arrive at the castle, they wait in a small chamber off the entrance
            hall until the older students have taken their seats, and then enter
            the Great Hall for the Sorting Ceremony to determine their House
            assignments. As Professor Minerva McGonagall said in Harry Potter
            and the Philosopher's Stone, "The Sorting is a very important
            ceremony because, while you are here, your House will be something
            like your family within Hogwarts. You will have classes with the
            rest of your House, sleep in your House dormitory, and spend free
            time in your House common room." After the Sorting Hat sings a song,
            each student in turn is seated upon the stool in front of the rest
            of the student body. The Hat is placed on the student's head,
            whereupon it examines his or her mind and assigns them to one of the
            four Houses based on abilities, personality, and preferences. After
            the Sorting Ceremony, the students and teachers enjoy a feast,
            prepared by the Hogwarts house-elves. If Dumbledore is feeling
            cheerful, he will lead the students in singing the school song.[9]
          </h6>
        </div>

        <div className="about">
          <h2>Houses</h2>
          <h6>
            Hogwarts is divided into four houses, each bearing the last name of
            its founder: Godric Gryffindor, Salazar Slytherin, Rowena Ravenclaw
            and Helga Hufflepuff. Throughout the school year, the houses compete
            for the House Cup, gaining and losing points based on actions such
            as performance in class and rule violations. The house with the
            highest end-of-year total wins and has its colours displayed in the
            Great Hall for the following school year. Each house also has its
            own Quidditch team that competes for the Quidditch Cup. These two
            competitions breed rivalries between the houses. Houses at Hogwarts
            are living and learning communities for their students. Each house
            is under the authority of one of the Hogwarts staff members. The
            Heads of the houses, as they are called, are in charge of giving
            their students important information, dealing with matters of severe
            punishment, and responding to emergencies in their houses, among
            other things. The dormitory and common room of a House are, barring
            rare exceptions, inaccessible to students belonging to other Houses;
            however, different houses will share classes as they are based on
            year group rather than House. In the early days of Hogwarts, the
            four founders hand-picked students for their Houses. When the
            founders worried how students would be selected after their deaths,
            Godric Gryffindor took his hat off and they each added knowledge to
            it, allowing the Sorting Hat to choose the students by judging each
            student's qualities and placing them in the most appropriate house.
            The student's own choices may affect the decision: the clearest
            example is the Hat telling Harry that he would do well in Slytherin
            in the first book, but ultimately selecting Gryffindor after Harry
            asks it not to put him in Slytherin. The translators of the books'
            foreign editions had difficulty translating the "house" concept; in
            countries where this system does not exist, no word could adequately
            convey the importance of belonging to a house, the loyalty owed to
            it, and the pride taken in prizes won by the house
          </h6>
          <div className="houses">
            <div className="gryffindor">
              <h3>Gryffindor</h3>
              <p>
                Gryffindor values courage, bravery, nerve, and chivalry.
                Gryffindor's mascot is the lion, and its colours are scarlet red
                and gold (maroon and gold on the ties and scarves). During the
                books, the Head of this house is the Transfiguration Professor
                and Deputy Headmistress, Minerva McGonagall until she becomes
                headmistress, and the house ghost is Sir Nicholas de
                Mimsy-Porpington, more commonly known as Nearly Headless Nick.
                According to Rowling, Gryffindor corresponds roughly to the
                element of fire. The founder of the house is Godric Gryffindor.
                The Gryffindor common room is in one of the castle's highest
                towers, and its entrance is on the seventh floor in the east
                wing of the castle and is guarded by a painting of The Fat Lady,
                who is garbed in a pink dress. She permits entry only after
                being given the correct password, as was established in the
                third book, when Sirius Black tried forcing entry into the
                tower, only to be blocked by The Fat Lady after he could not
                give the correct password. In the first book, Neville Longbottom
                tends to forget the password and must wait near the painting
                until other Gryffindors arrive to open the way.
              </p>
            </div>
            <div className="slytherin">
              <h3>Slytherin</h3>
              <p>
                Slytherin values ambition, cunning, leadership, and
                resourcefulness; the Sorting Hat said in Harry Potter and the
                Philosopher's Stone that Slytherins will do anything to get
                their way. The house mascot of Slytherin is the serpent, and the
                house colours are green and silver. Throughout the series, until
                the seventh book, the Head of House is Professor Severus Snape.
                Then, the previous Head of House Professor Horace Slughorn comes
                out of retirement, re-assuming authority after Snape becomes
                headmaster. The ghost of Slytherin house is Bloody Baron.
                According to Rowling, Slytherin corresponds roughly to the
                element of water.The founder of this house is Salazar
                Slytherin. The Slytherin dormitories and common room are reached
                by speaking a password to a patch of bare stone wall in the
                dungeons, which causes a hidden door to open. The Slytherin
                common room is a long, low, dungeon-style room, under the
                Hogwarts Lake, furnished with green lamps and carved armchairs.
                The room is described in the second book as having a greenish
                glow. The Sorting Hat claims that blood purity is a factor in
                selecting Slytherins, although this is not mentioned until the
                fifth book. There is no reason to believe, however, that
                Muggle-born students are not sorted there, merely that
                pure-blooded students are more desirable to that house, as there
                are several examples of half-bloods in the house – such as Snape
                and Tom Riddle/Voldemort – and Harry himself was only excluded
                from the house at his own insistence. In Deathly Hallows, a
                group of Snatchers claim that "not many Mudbloods" are sorted
                into Slytherin. When believing Harry to be dead and thinking
                that he has final victory in his grasp, Voldemort proclaims his
                intention to abolish the other three houses and force all
                Hogwarts students into Slytherin. This design is foiled by his
                defeat and death, after which Slytherin becomes more diluted in
                its blood purity, no longer remaining the pure-blood bastion it
                once was.
              </p>
            </div>
            <div className="hufflepuff">
              <h3>Hufflepuff</h3>
              <p>
                Hufflepuff values hard work, patience, justice, and loyalty. The
                house mascot is the badger, and canary yellow and black (or
                golden yellow and graphite in the Fantastic Beasts films) are
                its colours. During the books, the Head of this house is the
                Herbology Professor Pomona Sprout, and the house ghost is the
                Fat Friar. According to Rowling, Hufflepuff corresponds roughly
                to the element of earth. The founder of this house is Helga
                Hufflepuff. The entrance to the Hufflepuff dormitories and
                common room entrance is concealed in a pile of large barrels in
                an alcove in the corridor that holds the kitchen. To enter, one
                must tap the barrel two from the bottom in the middle of the
                second row in the rhythm of "Helga Hufflepuff". Unlike any other
                house, the Hufflepuff common room has a repelling device that
                douses the illegal entrant in vinegar if the wrong lid is tapped
                or the rhythm is wrong.The Hufflepuff common room is filled
                with yellow hangings and fat armchairs and it has little tunnels
                leading to the dormitories, all of which have perfectly round
                doors, like barrel tops
              </p>
            </div>
            <div className="ravenclaw">
              <h3>Ravenclaw</h3>
              <p>
                Ravenclaw values intelligence, learning, wisdom and
                wit. The house mascot is an eagle and the house
                colours are blue and bronze (blue and silver in the Harry Potter
                and Fantastic Beasts films and on the ties and scarves). During
                the books, the head of this house is the Charms teacher,
                Professor Filius Flitwick, and the house ghost is the Grey Lady.
                According to Rowling, Ravenclaw corresponds roughly to the
                element of air. The founder of this house is Rowena
                Ravenclaw. The dormitories are in Ravenclaw Tower, on the west
                side of Hogwarts. The common room is round and filled with blue
                hangings and armchairs, has a domed ceiling painted with stars
                and features a replica statue of Rowena wearing her diadem.
                Harry also notes that Ravenclaws "have a spectacular view of the
                surrounding mountains". A logical riddle must be solved to gain
                entry, whereas the Gryffindor and Slytherin common rooms only
                require a password. Professor McGonagall, the head of the
                Gryffindor House, solves the riddle accurately.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="footer-image">
      <img
          src="https://silvergold.media/media/products/7943/tn-7943-m.png"
          alt="Griffyndor"
        ></img>
         <img
          src="https://i0.wp.com/ortadunya.com/wp-content/uploads/2016/11/Slytherin.png"
          alt="Slytherin"
        ></img>
       
          
          <img
          src="https://www.freepnglogos.com/uploads/hogwarts-logo-png/hogwarts-logo-shadopro-deviantart-0.png"
          alt="Hogwarts"
        ></img>
        
         <img
          src="https://toppng.com/uploads/preview/escudo-gryffindor-png-hufflepuff-house-11563000685lwbmbe5zf8.png"
          alt="hufflepuff"
        ></img>
         <img
          src="https://www.seekpng.com/png/full/184-1840811_ravenclaw-crest-harry-potter-harry-potter-ravenclaw-house.png"
          alt="ravenclaw"
        ></img>
       </div>
    </div>
  );
};

export default BasePage;
