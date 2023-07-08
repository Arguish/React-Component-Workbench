import React, { useState } from "react";

import useWrite from "../../Hooks/useWrite.jsx";

const Combate = () => {
  const [menu, setmenu] = useState(true);
  const [HP1, setHP1] = useState(100);
  const [HP2, setHP2] = useState(100);
  const [text, playPause, reset, newMsg] = useWrite("lorem", false);

  const atq1 = () => {
    setHP1(HP1 - 5);
  };
  const atq2 = () => {
    setHP2(HP2 - 5);
  };

  const menuTog = () => {
    setmenu(!menu);
    playPause();
    reset();
  };

  return (
    <div className="h-[90%] w-[90%] border-2  rounded-lg text-white">
      <div className="border-2 rounded-lg h-4/5 w-full flex flex-wrap">
        <div className="w-1/2  flex justify-center items-center">
          <div className="w-96 h-20 border-2 ">
            <div className="flex justify-between">
              <h1>Nombre</h1>
              <h1>Lv 100</h1>
            </div>
            <progress className="w-full px-2 mt-4" value={HP1} max="100" />
          </div>
        </div>
        <div className="w-1/2  flex justify-center items-center">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqkJgIM1NZ1O3vCiBgKvIGalLJhzaZDhd3HA&usqp=CAU"
            alt=""
          />
        </div>
        <div className="w-1/2  flex justify-center items-center">
          <img
            src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/3c7834b5-2d5a-4ba1-a77f-a660b5e9c2ce/dddunn1-ea587263-cd0f-4fcc-9e3d-8143ce6e285d.png/v1/fill/w_224,h_212/pkmn_trainer_red_gbc_style_by_isrei_dddunn1-fullview.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MjEyIiwicGF0aCI6IlwvZlwvM2M3ODM0YjUtMmQ1YS00YmExLWE3N2YtYTY2MGI1ZTljMmNlXC9kZGR1bm4xLWVhNTg3MjYzLWNkMGYtNGZjYy05ZTNkLTgxNDNjZTZlMjg1ZC5wbmciLCJ3aWR0aCI6Ijw9MjI0In1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmltYWdlLm9wZXJhdGlvbnMiXX0.GdWPw-aGrZ9y4ZH4w4lxNahY91n13N0KCcijfOJPmfk"
            alt=""
          />
        </div>
        <div className="w-1/2  flex justify-center items-center">
          <div className="w-96 h-20 border-2 ">
            <div className="flex justify-between">
              <h1>Nombre</h1>
              <h1>Lv 100</h1>
            </div>
            <progress className="w-full px-2 mt-4" value={HP2} max="100" />
          </div>
        </div>
      </div>
      <div className="border-2 rounded-lg h-1/5 w-full">
        {!menu && (
          <p className="p-6" onClick={menuTog}>
            {text}
          </p>
        )}
        {menu && (
          <div className="h-full flex flex-wrap">
            <button
              onClick={() => {
                menuTog();
                atq1();
                newMsg(ataquem);
              }}
              className="w-1/2 rounded-lg bg-slate-300/40 border-2 border-white active:bg-slate-600"
            >
              Atacar
            </button>
            <button
              onClick={() => {
                menuTog();
                atq2();
                newMsg(defendem);
              }}
              className="w-1/2 rounded-lg bg-slate-300/40 border-2 border-white active:bg-slate-600"
            >
              Recibir Daño
            </button>
            <button
              onClick={menuTog}
              className="w-1/2 rounded-lg bg-slate-300/40 border-2 border-white active:bg-slate-600"
            >
              Lorem
            </button>
            <button
              onClick={menuTog}
              className="w-1/2 rounded-lg bg-slate-300/40 border-2 border-white active:bg-slate-600"
            >
              Lorem
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Combate;

const ataquem =
  "ATAQUE: Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolores fugit recusandae velit natus dicta, hic quos quidem vitae rem cumque ducimus, quibusdam tempore laboriosam aspernatur nostrum. Possimus odio optio nesciunt!";
const defendem =
  "DEFENSA: Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolores fugit recusandae velit natus dicta, hic quos quidem vitae rem cumque ducimus, quibusdam tempore laboriosam aspernatur nostrum. Possimus odio optio nesciunt!";
