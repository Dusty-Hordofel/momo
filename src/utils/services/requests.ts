const API_DOMAIN = process.env.NEXT_PUBLIC_API_DOMAIN || null;

type userRole = "user" | "admin" | "superAdmin" | "centre" | undefined;
type user =
  | {
      id: string;
      name: string;
      email: string;
      lastName: string;
      image: string;
      role: "user" | "admin" | "superAdmin" | "centre";
    }
  | undefined;

const getFiles = async (user: user, userRole: userRole) => {
  try {
    const response = await fetch(`${API_DOMAIN}/api/users/files`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Cache-Control": "no-cache", // Add cache-control header to prevent caching
        Pragma: "no-cache", // Add pragma header to prevent caching in older browsers
      },

      body: JSON.stringify({ user, userRole }),
    });

    if (!response.ok) {
      throw new Error("Les fichiers n'ont pas pu être récupérés");
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
    return [];
  }
};

export { getFiles };
