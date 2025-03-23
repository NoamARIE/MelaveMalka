export const Song = {
    getAll: async () => [
      { id: 1, title: "Shir Lamaalot", artist: "Traditional" },
      { id: 2, title: "Esa Einai", artist: "David Hamelech" }
    ],
    getById: async (id) => ({ id, title: "Example Song", artist: "Unknown" }),
  };
  
  export const Playlist = {
    getAll: async () => [
      { id: 1, name: "Shabbat Songs", songs: [1, 2] }
    ],
    getById: async (id) => ({ id, name: "Example Playlist", songs: [1] }),
  };
  
  // 🔹 מגדירים אדמין לפי משתנה קבוע (בשלב מאוחר אפשר להעביר לקובץ ENV)
  export const isAdmin = true; // שנה ל-`false` כדי לבטל אפשרויות אדמין
  