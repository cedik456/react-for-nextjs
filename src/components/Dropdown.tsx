import { useState } from "react";

function Dropdown() {
  const [open, setOpen] = useState(false);

  function showDropdown() {
    setOpen(!open);
  }

  return (
    <div>
      <button
        onClick={showDropdown}
        className="border p-2 rounded bg-black text-white cursor-pointer mb-2"
      >
        {open ? "Hide Dropdown" : "Show Dropdown"}
      </button>

      {open && (
        <ul>
          <li>Profile</li>
          <li>Settings</li>
          <li>Logout</li>
        </ul>
      )}
    </div>
  );
}

export default Dropdown;
