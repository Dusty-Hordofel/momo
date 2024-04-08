const apiDomain = process.env.NEXT_PUBLIC_API_DOMAIN || null;

// // Fetch all properties
// async function fetchProperties({ showFeatured = false } = {}) {
//   try {
//     // Handle the case where the domain is not available yet
//     if (!apiDomain) {
//       return [];
//     }

//     const res = await fetch(
//       `${apiDomain}/properties${showFeatured ? "/featured" : ""}`,
//       { cache: "no-store" }
//     );

//     if (!res.ok) {
//       throw new Error("Failed to fetch data");
//     }

//     return res.json();
//   } catch (error) {
//     console.log(error);
//     return [];
//   }
// }

// // Fetch single property
// async function fetchProperty(id: any) {
//   try {
//     // Handle the case where the domain is not available yet
//     if (!apiDomain) {
//       return null;
//     }

//     const res = await fetch(`${apiDomain}/properties/${id}`);

//     if (!res.ok) {
//       throw new Error("Failed to fetch data");
//     }

//     return res.json();
//   } catch (error) {
//     // console.log(error);
//     return null;
//   }
// }

// export { fetchProperties, fetchProperty };

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
    const response = await fetch(`${apiDomain}/api/users/files`, {
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
