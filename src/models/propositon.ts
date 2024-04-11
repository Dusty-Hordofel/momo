//1. User
const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  username: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  profileImage: { type: String, default: "default.jpg" },
  createdAt: { type: Date, default: Date.now },
  lastLoginAt: { type: Date },
  groups: [{ type: mongoose.Schema.Types.ObjectId, ref: "Center" }],
  pendingRequests: [
    { type: mongoose.Schema.Types.ObjectId, ref: "CenterRequest" },
  ],
  role: {
    type: String,
    enum: ["user", "centre", "admin", "superadmin"],
    default: "user",
  },
  contactInfo: {
    phoneNumber: String,
    address: String,
  },
  privacySettings: {
    profileVisibility: {
      type: String,
      enum: ["public", "private"],
      default: "public",
    },
    activityVisibility: {
      type: String,
      enum: ["public", "private"],
      default: "public",
    },
  },
});

// const User = mongoose.model('User', userSchema);

// module.exports = User;

// Dans ce schéma, groups est une liste des identifiants des groupes auxquels l'utilisateur appartient, et pendingRequests est une liste des demandes d'adhésion en attente de l'utilisateur. Les autres champs représentent les informations et les fonctionnalités spécifiques à l'utilisateur que j'ai mentionnées ci-dessus.

//2. Group

// Bien sûr ! Voici un schéma avancé pour un groupe dans une application de réseau social, en prenant en compte diverses fonctionnalités et options :

// const mongoose = require('mongoose');

const groupSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String },
  createdBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  createdAt: { type: Date, default: Date.now },
  members: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }],
  moderators: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }],
  admins: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }],
  privacy: {
    type: String,
    enum: ["public", "private", "hidden"],
    default: "public",
  },
  visibility: {
    type: String,
    enum: ["visible", "invisible"],
    default: "visible",
  },
  categories: [{ type: mongoose.Schema.Types.ObjectId, ref: "Category" }],
  tags: [String],
  featuredImage: { type: String },
  coverPhoto: { type: String },
  posts: [{ type: mongoose.Schema.Types.ObjectId, ref: "Post" }],
  events: [{ type: mongoose.Schema.Types.ObjectId, ref: "Event" }],
  files: [{ type: mongoose.Schema.Types.ObjectId, ref: "File" }],
  settings: {
    approvalRequired: { type: Boolean, default: false },
    joinRequests: { type: Boolean, default: true },
    memberApproval: { type: Boolean, default: false },
    postApproval: { type: Boolean, default: false },
    eventApproval: { type: Boolean, default: false },
    fileUploads: { type: Boolean, default: true },
    visibilitySettings: {
      membersList: {
        type: String,
        enum: ["public", "private", "hidden"],
        default: "public",
      },
      postsVisibility: {
        type: String,
        enum: ["public", "private", "moderated"],
        default: "public",
      },
      eventsVisibility: {
        type: String,
        enum: ["public", "private", "moderated"],
        default: "public",
      },
      filesVisibility: {
        type: String,
        enum: ["public", "private", "moderated"],
        default: "public",
      },
    },
  },
  rules: [{ type: String }],
  descriptionHtml: { type: String },
  archived: { type: Boolean, default: false },
  deleted: { type: Boolean, default: false },
});

const Group = mongoose.model("Group", groupSchema);

module.exports = Group;

// Ce schéma inclut une variété de fonctionnalités et d'options avancées pour les groupes, notamment :

// 1. **Nom et description** : Le nom et la description du groupe.
// 2. **Créateur et date de création** : L'utilisateur qui a créé le groupe et la date de création.
// 3. **Membres, modérateurs et administrateurs** : Les listes d'utilisateurs membres, modérateurs et administrateurs du groupe.
// 4. **Paramètres de confidentialité et de visibilité** : Les options de confidentialité et de visibilité du groupe.
// 5. **Catégories et tags** : Les catégories et les tags associés au groupe.
// 6. **Images en vedette** : Les images en vedette pour le groupe.
// 7. **Publications, événements et fichiers** : Les listes d'identifiants des publications, événements et fichiers associés au groupe.
// 8. **Paramètres avancés** : Des paramètres avancés tels que l'approbation des membres, la modération des publications et des événements, etc.
// 9. **Règles et description HTML** : Les règles du groupe et une description en HTML.
// 10. **Archivage et suppression** : Les indicateurs d'archivage et de suppression pour le groupe.

// Ce schéma peut être étendu ou ajusté en fonction des besoins spécifiques de votre application, mais il fournit une base solide pour un modèle de groupe avancé dans un réseau social.

// 3. GroupRequest

// Bien sûr ! Voici à quoi pourrait ressembler un schéma avancé pour une demande d'adhésion à un groupe (GroupRequest) dans une application de réseau social :

// const mongoose = require('mongoose');

const centerRequestSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  group: { type: mongoose.Schema.Types.ObjectId, ref: "Group", required: true },
  status: {
    type: String,
    enum: ["pending", "accepted", "rejected"],
    default: "pending",
  },
  message: { type: String },
  requestedAt: { type: Date, default: Date.now },
  processedAt: { type: Date },
  processedBy: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
});

// const CenterRequest = mongoose.model("CenterRequest", centerRequestSchema);

// module.exports = CenterRequest;

const CenterRequest =
  mongoose.models.CenterRequest ||
  mongoose.model("CenterRequest", centerRequestSchema);

export default CenterRequest;

// Ce schéma inclut les éléments suivants :

// 1. **Utilisateur** : L'utilisateur qui a soumis la demande d'adhésion, référencé par son ID d'utilisateur.
// 2. **Groupe** : Le groupe auquel l'utilisateur demande à adhérer, référencé par son ID de groupe.
// 3. **Statut** : Le statut de la demande d'adhésion, qui peut être "en attente" (pending), "accepté" (accepted) ou "rejeté" (rejected).
// 4. **Message** : Un message optionnel que l'utilisateur peut inclure avec sa demande d'adhésion.
// 5. **Demandé à** : La date et l'heure à laquelle la demande a été soumise.
// 6. **Traité à** : La date et l'heure à laquelle la demande a été traitée.
// 7. **Traité par** : L'utilisateur ou le modérateur qui a traité la demande.

// Ce schéma fournit une structure solide pour suivre les demandes d'adhésion aux groupes dans votre application de réseau social. Vous pouvez l'étendre ou l'ajuster en fonction des besoins spécifiques de votre application.
