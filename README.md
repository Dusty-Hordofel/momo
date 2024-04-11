### 1. Mise à jour

### 10. Création d'un server action et d'une routes handler pour récupérer les fichiers

### 11. Ajout des fichiers sur son espace personnel

- add [UserDashboardLayout](<src/app/(private)/dashboard/user/layout.tsx>)
- add [CloudinaryUpload](src/utils/cloudinary/CloudinaryUpload.tsx)
  <!-- https://cloudinary.com/blog/guest_post/signed-uploads-in-cloudinary-with-next-js -->
- add [sign-file](src/app/api/users/sign-file/route.ts).

### 12. Ajout de la page d'acceuil

### 13. Mise à jour de la Navigation

### 14. Suppression de la variable d'environnement

### 15. Suppression temporaire des fichiers , ajout comme favoris.

### 16. Mise à jour de l'espace utilisateur

### 17. Mise à jour de la taille du text pour les Inputs.

- Cela empechera le zoom sur l'écran lorsque je vais cliquer sur l'input! \* [ Clicking an Input on a Phone Causes Screen Zoom](https://emmamontgomery.medium.com/javascript-website-clicking-an-input-on-a-phone-causes-screen-zoom-e5bd02eb65bf#:~:text=Why%20is%20this%20happening%3F,can%20better%20see%20any%20text.)

```css
@media screen and (max-width: 767px) {
  input,
  select,
  textarea {
    font-size: 16px !important;
  }
}
```

### 18. Creation du formulaire d'envoie de requete
