import Slider from 'react-perfect-slider'
import ArrowBackIosNewRoundedIcon from '@mui/icons-material/ArrowBackIosNewRounded'
import ArrowForwardIosRoundedIcon from '@mui/icons-material/ArrowForwardIosRounded'

export default function ImageSlider() {
  return (
    <Slider
      renderControls={(next, previous) => [
        <button onClick={previous} className="slider-button slider-left">
          <ArrowBackIosNewRoundedIcon />
        </button>,
        <button onClick={next} className="slider-button slider-right">
          <ArrowForwardIosRoundedIcon />
        </button>
      ]}
      className="custom-slider"
    >
      <div key={1}>
        <img
          className="slider-image"
          src="/minion/minion (1).jpg"
          alt=""
        />
      </div>
      <div key={2}>
        <img
          className="slider-image"
          src="/minion/minion (2).jpg"
          alt=""
        />
      </div>
      <div key={3}>
        <img
          className="slider-image"
          src="/minion/minion (3).jpg"
          alt=""
        />
      </div>
      <div key={4}>
        <img
          className="slider-image"
          src="/minion/minion (4).jpg"
          alt=""
        />
      </div>
      <div key={5}>
        <img
          className="slider-image"
          src="/minion/minion (5).jpg"
          alt=""
        />
      </div>
      <div key={6}>
        <img
          className="slider-image"
          src="/minion/minion (6).jpg"
          alt=""
        />
      </div>
      <div key={7}>
        <img
          className="slider-image"
          src="/minion/minion (7).jpg"
          alt=""
        />
      </div>
      <div key={8}>
        <img
          className="slider-image"
          src="/minion/minion (8).jpg"
          alt=""
        />
      </div>
      <div key={9}>
        <img
          className="slider-image"
          src="/minion/minion (9).jpg"
          alt=""
        />
      </div>
      <div key={10}>
        <img
          className="slider-image"
          src="/minion/minion (10).jpg"
          alt=""
        />
      </div>
      <div key={11}>
        <img
          className="slider-image"
          src="/minion/minion (11).jpg"
          alt=""
        />
      </div>
      <div key={12}>
        <img
          className="slider-image"
          src="/minion/minion (12).jpg"
          alt=""
        />
      </div>
      <div key={13}>
        <img
          className="slider-image"
          src="/minion/minion (13).jpg"
          alt=""
        />
      </div>
      <div key={14}>
        <img
          className="slider-image"
          src="/minion/minion (14).jpg"
          alt=""
        />
      </div>
      <div key={15}>
        <img
          className="slider-image"
          src="/minion/minion (15).jpg"
          alt=""
        />
      </div>
      <div key={16}>
        <img
          className="slider-image"
          src="/minion/minion (16).jpg"
          alt=""
        />
      </div>
      <div key={17}>
        <img
          className="slider-image"
          src="/minion/minion (17).jpg"
          alt=""
        />
      </div>
      <div key={18}>
        <img
          className="slider-image"
          src="/minion/minion (18).jpg"
          alt=""
        />
      </div>
      <div key={19}>
        <img
          className="slider-image"
          src="/minion/minion (19).jpg"
          alt=""
        />
      </div>
      <div key={20}>
        <img
          className="slider-image"
          src="/minion/minion (20).jpg"
          alt=""
        />
      </div>
      <div key={21}>
        <img
          className="slider-image"
          src="/minion/minion (21).jpg"
          alt=""
        />
      </div>
      <div key={22}>
        <img
          className="slider-image"
          src="/minion/minion (22).jpg"
          alt=""
        />
      </div>
      <div key={23}>
        <img
          className="slider-image"
          src="/minion/minion (23).jpg"
          alt=""
        />
      </div>
      <div key={24}>
        <img
          className="slider-image"
          src="/minion/minion (24).jpg"
          alt=""
        />
      </div>
      <div key={25}>
        <img
          className="slider-image"
          src="/minion/minion (25).jpg"
          alt=""
        />
      </div>
      <div key={26}>
        <img
          className="slider-image"
          src="/minion/minion (26).jpg"
          alt=""
        />
      </div>
      <div key={27}>
        <img
          className="slider-image"
          src="/minion/minion (27).jpg"
          alt=""
        />
      </div>
      <div key={28}>
        <img
          className="slider-image"
          src="/minion/minion (28).jpg"
          alt=""
        />
      </div>
      <div key={29}>
        <img
          className="slider-image"
          src="/minion/minion (29).jpg"
          alt=""
        />
      </div>
      <div key={30}>
        <img
          className="slider-image"
          src="/minion/minion (30).jpg"
          alt=""
        />
      </div>
      <div key={31}>
        <img
          className="slider-image"
          src="/minion/minion (32).jpg"
          alt=""
        />
      </div>
      <div key={32}>
        <img
          className="slider-image"
          src="/minion/minion (33).jpg"
          alt=""
        />
      </div>
      <div key={33}>
        <img
          className="slider-image"
          src="/minion/minion (34).jpg"
          alt=""
        />
      </div>
      <div key={34}>
        <img
          className="slider-image"
          src="/minion/minion (35).jpg"
          alt=""
        />
      </div>
    </Slider>
  )
}