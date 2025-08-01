import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LeftSidebarMenu from "./components/Layout/LeftSidebarMenu";
import Footer from "./components/Layout/Footer";
import TopNavbar from "./components/Layout/TopNavbar";
import ScrollToTop from "./components/Layout/ScrollToTop";

// Front Pages
import Home from "./pages/Home";
import Features from "./pages/Features";
import Team from "./pages/Team";
import Faq from "./pages/Faq";
import Contact from "./pages/Contact";

// Dashboard
import Ecommerce from "./pages/dashboard/Ecommerce";
import CRM from "./pages/dashboard/CRM";
import ProjectManagement from "./pages/dashboard/ProjectManagement";
import LMS from "./pages/dashboard/LMS";
import HelpDesk from "./pages/dashboard/HelpDesk";
import Analytics from "./pages/dashboard/Analytics";
import Crypto from "./pages/dashboard/Crypto";
import Sales from "./pages/dashboard/Sales";
import Hospital from "./pages/dashboard/Hospital";
import Marketing from "./pages/dashboard/Marketing";
import NFT from "./pages/dashboard/NFT";
import Saas from "./pages/dashboard/Saas";
import RealEstate from "./pages/dashboard/RealEstate";
import Shipment from "./pages/dashboard/Shipment";
import Finance from "./pages/dashboard/Finance";
import HRM from "./pages/dashboard/HRM";
import School from "./pages/dashboard/School";
import CallCenter from "./pages/dashboard/CallCenter";
import PosSystem from "./pages/dashboard/PosSystem";
import Podcast from "./pages/dashboard/Podcast";
import SocialMedia from "./pages/dashboard/SocialMedia";
import Doctor from "./pages/dashboard/Doctor";
import BeautySalon from "./pages/dashboard/BeautySalon";
import StoreAnalytics from "./pages/dashboard/StoreAnalytics";
import Restaurant from "./pages/dashboard/Restaurant";
import Hotel from "./pages/dashboard/Hotel";
import RealEstateAgent from "./pages/dashboard/RealEstateAgent";
import CreditCard from "./pages/dashboard/CreditCard";
import CryptoTrader from "./pages/dashboard/CryptoTrader";
import CryptoPerformance from "./pages/dashboard/CryptoPerformance";

// Apps
import ToDoList from "./pages/apps/ToDoList";
import Calendar from "./pages/apps/Calendar";
import Contacts from "./pages/apps/Contacts";
import Chat from "./pages/apps/Chat";
import Email from "./pages/apps/email/Email";
import Promotions from "./pages/apps/email/Promotions";
import Compose from "./pages/apps/email/Compose";
import Read from "./pages/apps/email/Read";
import KanbanBoard from "./pages/apps/KanbanBoard";

// Apps -> File Manager
import FileManager from "./pages/apps/FileManager";
import Assets from "./pages/apps/FileManager/Assets";
import Projects from "./pages/apps/FileManager/Projects";
import Personal from "./pages/apps/FileManager/Personal";
import Applications from "./pages/apps/FileManager/Applications";
import Documents from "./pages/apps/FileManager/Documents";
import Media from "./pages/apps/FileManager/Media";
import Recents from "./pages/apps/FileManager/Recents";
import Important from "./pages/apps/FileManager/Important";

// eCommerce
import ProductsGrid from "./pages/ecommerce/ProductsGrid";
import ProductsList from "./pages/ecommerce/ProductsList";
import Published from "./pages/ecommerce/ProductsList/Published";
import Draft from "./pages/ecommerce/ProductsList/Draft";
import ProductsDetails from "./pages/ecommerce/ProductsList/ProductsDetails";
import CreateProduct from "./pages/ecommerce/CreateProduct";
import EditProduct from "./pages/ecommerce/EditProduct";
import Cart from "./pages/ecommerce/Cart";
import Checkout from "./pages/ecommerce/Checkout";
import Orders from "./pages/ecommerce/Orders";
import OrderDetails from "./pages/ecommerce/Orders/OrderDetails";
import CreateOrder from "./pages/ecommerce/Orders/CreateOrder";
import Tracking from "./pages/ecommerce/Orders/Tracking";
import Customers from "./pages/ecommerce/Customers";
import CustomersDetails from "./pages/ecommerce/Customers/CustomersDetails";
import Categories from "./pages/ecommerce/Categories";
import Sellers from "./pages/ecommerce/Sellers";
import SellersDetails from "./pages/ecommerce/Sellers/SellersDetails";
import CreateSeller from "./pages/ecommerce/Sellers/CreateSeller";
import Reviews from "./pages/ecommerce/Reviews";
import Refunds from "./pages/ecommerce/Refunds";

// CRM
import CrmContacts from "./pages/crm/CrmContacts";
import CrmCustomers from "./pages/crm/CrmCustomers";
import CrmLeads from "./pages/crm/CrmLeads";
import CrmDeals from "./pages/crm/CrmDeals";

// Project Management
import ProjectOverview from "./pages/project-management/ProjectOverview";
import ProjectsList from "./pages/project-management/ProjectsList";
import CreateProject from "./pages/project-management/CreateProject";
import Clients from "./pages/project-management/Clients";
import Teams from "./pages/project-management/Teams";
import PmKanbanBoard from "./pages/project-management/PmKanbanBoard";
import PmUsers from "./pages/project-management/PmUsers";

// LMS
import Courses from "./pages/lms/Courses";
import CoursesDetails from "./pages/lms/CoursesDetails";
import LessonPreview from "./pages/lms/LessonPreview";
import CreateCourse from "./pages/lms/CreateCourse";
import EditCourse from "./pages/lms/EditCourse";
import Instructors from "./pages/lms/Instructors";

// Helpdesk
import Tickets from "./pages/helpdesk/Tickets";
import TicketsDetails from "./pages/helpdesk/Tickets/TicketsDetails";
import Agents from "./pages/helpdesk/Agents";
import Reports from "./pages/helpdesk/Reports";

// NFT
import Marketplace from "./pages/nft/Marketplace";
import ExploreAll from "./pages/nft/ExploreAll";
import LiveAuction from "./pages/nft/LiveAuction";
import NftDetails from "./pages/nft/NftDetails";
import NftCreators from "./pages/nft/NftCreators";
import NftCreatorDetails from "./pages/nft/NftCreatorDetails";
import WalletConnect from "./pages/nft/WalletConnect";
import CreateNft from "./pages/nft/CreateNft";

// Real Estate
import PropertyList from "./pages/real-estate/PropertyList";
import PropertyDetails from "./pages/real-estate/PropertyDetails";
import AddProperty from "./pages/real-estate/AddProperty";
import ReAgents from "./pages/real-estate/ReAgents";
import ReAgentsDetails from "./pages/real-estate/ReAgentsDetails";
import AddAgents from "./pages/real-estate/AddAgents";
import ReCustomers from "./pages/real-estate/ReCustomers";

// Finance
import Wallet from "./pages/finance/Wallet";
import Transactions from "./pages/finance/Transactions";

// Doctor
import PatientsList from "./pages/doctor/PatientsList";
import AddPatient from "./pages/doctor/AddPatient";
import PatientDetails from "./pages/doctor/PatientDetails";
import Appointments from "./pages/doctor/Appointments";
import Prescriptions from "./pages/doctor/Prescriptions";
import WritePrescription from "./pages/doctor/WritePrescription";

// Restaurant
import Menus from "./pages/restaurant/Menus";
import DishDetails from "./pages/restaurant/DishDetails";

// Hotel
import RoomsList from "./pages/hotel/RoomsList";
import RoomDetails from "./pages/hotel/RoomDetails";
import GuestsList from "./pages/hotel/GuestsList";

// Real Estate Agent
import Properties from "./pages/real-estate-agent/Properties";
import ReaPropertyDetails from "./pages/real-estate-agent/ReaPropertyDetails";

// Crypto Trader
import CtTransactions from "./pages/crypto-trader/CtTransactions";
import GainersLosers from "./pages/crypto-trader/GainersLosers";
import CtWallet from "./pages/crypto-trader/CtWallet";

// Events
import Events from "./pages/events";
import EventsList from "./pages/events/EventsList";
import EventsDetails from "./pages/events/EventsDetails";
import CreateAnEvent from "./pages/events/CreateAnEvent";
import EditAnEvent from "./pages/events/EditAnEvent";

// Social
import SProfile from "./pages/social/SProfile";
import SAbout from "./pages/social/SAbout";
import SActivity from "./pages/social/SActivity";
import SosialProfileSettings from "./pages/social/SosialProfileSettings";

// Invoices
import Invoices from "./pages/invoices";
import InvoicesDetails from "./pages/invoices/InvoicesDetails";
import CreateInvoice from "./pages/invoices/CreateInvoice";
import EditInvoice from "./pages/invoices/EditInvoice";

// Users
import Users from "./pages/users";
import UsersList from "./pages/users/UsersList";
import AddUsers from "./pages/users/AddUsers";

// Profile
import UserProfile from "./pages/profile/UserProfile";
import TeamsProfile from "./pages/profile/TeamsProfile";
import MyProjects from "./pages/profile/MyProjects";

import Starter from "./pages/Starter";

// Icons
import MaterialSymbols from "./pages/icons/MaterialSymbols";
import Remixicon from "./pages/icons/Remixicon";

// ui-kit
import Autocomplete from "./pages/ui-kit/Autocomplete";
import Buttons from "./pages/ui-kit/Buttons";
import Checkbox from "./pages/ui-kit/Checkbox";
import Radio from "./pages/ui-kit/Radio";
import Rating from "./pages/ui-kit/Rating";
import Select from "./pages/ui-kit/Select";
import Slider from "./pages/ui-kit/Slider";
import Switch from "./pages/ui-kit/Switch";
import TransferList from "./pages/ui-kit/TransferList";
import Avatar from "./pages/ui-kit/Avatar";
import Badge from "./pages/ui-kit/Badge";
import Chip from "./pages/ui-kit/Chip";
import Divider from "./pages/ui-kit/Divider";
import Table from "./pages/ui-kit/Table";
import Tooltip from "./pages/ui-kit/Tooltip";
import Typography from "./pages/ui-kit/Typography";
import Alerts from "./pages/ui-kit/Alerts";
import Dialog from "./pages/ui-kit/Dialog";
import Progress from "./pages/ui-kit/Progress";
import Snackbar from "./pages/ui-kit/Snackbar";
import Accordion from "./pages/ui-kit/Accordion";
import Card from "./pages/ui-kit/Card";
import Breadcrumbs from "./pages/ui-kit/Breadcrumbs";
import Pagination from "./pages/ui-kit/Pagination";
import SpeedDial from "./pages/ui-kit/SpeedDial";
import Stepper from "./pages/ui-kit/Stepper";
import Tabs from "./pages/ui-kit/Tabs";
import ImageList from "./pages/ui-kit/ImageList";
import Transitions from "./pages/ui-kit/Transitions";
import TreeView from "./pages/ui-kit/TreeView";
import Masonry from "./pages/ui-kit/Masonry";
import UITimeline from "./pages/ui-kit/UITimeline";

// Tables
import BasicTables from "./pages/tables/BasicTables";
import DataTables from "./pages/tables/DataTables";

// Forms
import BasicElements from "./pages/forms/BasicElements";
import AdvancedElements from "./pages/forms/AdvancedElements";
import Editors from "./pages/forms/Editors";
import FileUploader from "./pages/forms/FileUploader";

// Charts
import Line from "./pages/charts/Line";
import Area from "./pages/charts/Area";
import Column from "./pages/charts/Column";
import Mixed from "./pages/charts/Mixed";
import Radialbar from "./pages/charts/Radialbar";
import Radar from "./pages/charts/Radar";
import Pie from "./pages/charts/Pie";
import Polar from "./pages/charts/Polar";
import More from "./pages/charts/More";

// Authentication
import SignIn from "./pages/authentication/SignIn";
import SignUp from "./pages/authentication/SignUp";
import ForgotPassword from "./pages/authentication/ForgotPassword";
import ResetPassword from "./pages/authentication/ResetPassword";
import ConfirmEmail from "./pages/authentication/ConfirmEmail";
import LockScreen from "./pages/authentication/LockScreen";
import Logout from "./pages/authentication/Logout";

// Extra Pages
import Pricing from "./pages/Pricing";
import Timeline from "./pages/Timeline";
import ExtraFaq from "./pages/ExtraFaq";
import Gallery from "./pages/Gallery";
import Testimonials from "./pages/Testimonials";
import Search from "./pages/Search";
import ComingSoon from "./pages/ComingSoon";
import BlankPage from "./pages/BlankPage";
import NotFound from "./pages/NotFound";
import InternalError from "./pages/InternalError";

import Widgets from "./pages/Widgets";
import Maps from "./pages/Maps";
import Notifications from "./pages/Notifications";
import Members from "./pages/Members";
import MyProfile from "./pages/MyProfile";

// Settings
import AccountSettings from "./pages/settings/AccountSettings";
import ChangePassword from "./pages/settings/ChangePassword";
import Connections from "./pages/settings/Connections";
import PrivacyPolicy from "./pages/settings/PrivacyPolicy";
import TermsConditions from "./pages/settings/TermsConditions";

const App = () => {
  const [active, setActive] = useState(false);
  const [pathname, setPathname] = useState("");

  useEffect(() => {
    setPathname(window.location.pathname); // Get the current path
  }, []);

  const toggleActive = () => {
    setActive(!active);
  };

  const isAuthPage = [
    "/authentication/sign-in/",
    "/authentication/sign-up/",
    "/authentication/forgot-password/",
    "/authentication/reset-password/",
    "/authentication/confirm-email/",
    "/authentication/lock-screen/",
    "/authentication/logout/",
    "/coming-soon/",
    "/",
    "/features/",
    "/team/",
    "/faq/",
    "/contact/",
  ].includes(pathname);

  return (
    <>
      <div className={`main-wrapper-content ${active ? "active" : ""}`}>
        <Router>
          {!isAuthPage && (
            <>
              <TopNavbar toggleActive={toggleActive} />

              <LeftSidebarMenu toggleActive={toggleActive} />
            </>
          )}

          <div className="main-content">
            <ScrollToTop />

            <Routes>
              {/* Front Pages */}
              <Route path="/" element={<Home />} />
              <Route path="/features" element={<Features />} />
              <Route path="/team" element={<Team />} />
              <Route path="/faq" element={<Faq />} />
              <Route path="/contact" element={<Contact />} />

              {/* Dashboard */}
              <Route path="/dashboard/ecommerce" element={<Ecommerce />} />
              <Route path="/dashboard/crm" element={<CRM />} />
              <Route
                path="/dashboard/project-management"
                element={<ProjectManagement />}
              />
              <Route path="/dashboard/lms" element={<LMS />} />
              <Route path="/dashboard/helpdesk" element={<HelpDesk />} />
              <Route path="/dashboard/analytics" element={<Analytics />} />
              <Route path="/dashboard/crypto" element={<Crypto />} />
              <Route path="/dashboard/sales" element={<Sales />} />
              <Route path="/dashboard/hospital" element={<Hospital />} />
              <Route path="/dashboard/marketing" element={<Marketing />} />
              <Route path="/dashboard/nft" element={<NFT />} />
              <Route path="/dashboard/saas" element={<Saas />} />
              <Route path="/dashboard/real-estate" element={<RealEstate />} />
              <Route path="/dashboard/shipment" element={<Shipment />} />
              <Route path="/dashboard/finance" element={<Finance />} />
              <Route path="/dashboard/hrm" element={<HRM />} />
              <Route path="/dashboard/school" element={<School />} />
              <Route path="/dashboard/call-center" element={<CallCenter />} />
              <Route path="/dashboard/pos-system" element={<PosSystem />} />
              <Route path="/dashboard/podcast" element={<Podcast />} />
              <Route path="/dashboard/social-media" element={<SocialMedia />} />
              <Route path="/dashboard/doctor" element={<Doctor />} />
              <Route path="/dashboard/beauty-salon" element={<BeautySalon />} />
              <Route
                path="/dashboard/store-analytics"
                element={<StoreAnalytics />}
              />
              <Route path="/dashboard/restaurant" element={<Restaurant />} />
              <Route path="/dashboard/hotel" element={<Hotel />} />
              <Route
                path="/dashboard/real-estate-agent"
                element={<RealEstateAgent />}
              />
              <Route path="/dashboard/credit-card" element={<CreditCard />} />
              <Route
                path="/dashboard/crypto-trader"
                element={<CryptoTrader />}
              />
              <Route
                path="/dashboard/crypto-performance"
                element={<CryptoPerformance />}
              />

              {/* Apps */}
              <Route path="/apps/to-do-list" element={<ToDoList />} />
              <Route path="/apps/calendar" element={<Calendar />} />
              <Route path="/apps/contacts" element={<Contacts />} />
              <Route path="/apps/chat" element={<Chat />} />
              <Route path="/apps/email" element={<Email />} />
              <Route path="/apps/email/promotions" element={<Promotions />} />
              <Route path="/apps/email/compose" element={<Compose />} />
              <Route path="/apps/email/read" element={<Read />} />
              <Route path="/apps/kanban-board" element={<KanbanBoard />} />

              {/* Apps -> File Manager */}
              <Route path="/apps/file-manager" element={<FileManager />} />
              <Route path="/apps/file-manager/assets" element={<Assets />} />
              <Route
                path="/apps/file-manager/projects"
                element={<Projects />}
              />
              <Route
                path="/apps/file-manager/personal"
                element={<Personal />}
              />
              <Route
                path="/apps/file-manager/applications"
                element={<Applications />}
              />
              <Route
                path="/apps/file-manager/documents"
                element={<Documents />}
              />
              <Route path="/apps/file-manager/media" element={<Media />} />
              <Route path="/apps/file-manager/recents" element={<Recents />} />
              <Route
                path="/apps/file-manager/important"
                element={<Important />}
              />

              {/* eCommerce */}
              <Route
                path="/ecommerce/products-grid"
                element={<ProductsGrid />}
              />
              <Route
                path="/ecommerce/products-list"
                element={<ProductsList />}
              />
              <Route
                path="/ecommerce/products-list/published"
                element={<Published />}
              />
              <Route
                path="/ecommerce/products-list/draft"
                element={<Draft />}
              />
              <Route
                path="/ecommerce/products-list/details"
                element={<ProductsDetails />}
              />
              <Route
                path="/ecommerce/create-product/"
                element={<CreateProduct />}
              />
              <Route path="/ecommerce/edit-product" element={<EditProduct />} />
              <Route path="/ecommerce/cart" element={<Cart />} />
              <Route path="/ecommerce/checkout" element={<Checkout />} />
              <Route path="/ecommerce/orders" element={<Orders />} />
              <Route
                path="/ecommerce/orders/details"
                element={<OrderDetails />}
              />
              <Route
                path="/ecommerce/orders/create"
                element={<CreateOrder />}
              />
              <Route path="/ecommerce/orders/tracking" element={<Tracking />} />
              <Route path="/ecommerce/customers" element={<Customers />} />
              <Route
                path="/ecommerce/customers/details"
                element={<CustomersDetails />}
              />
              <Route path="/ecommerce/categories" element={<Categories />} />
              <Route path="/ecommerce/sellers" element={<Sellers />} />
              <Route
                path="/ecommerce/sellers/details"
                element={<SellersDetails />}
              />
              <Route
                path="/ecommerce/sellers/create"
                element={<CreateSeller />}
              />
              <Route path="/ecommerce/reviews" element={<Reviews />} />
              <Route path="/ecommerce/refunds" element={<Refunds />} />

              {/* CRM */}
              <Route path="/crm/contacts" element={<CrmContacts />} />
              <Route path="/crm/customers" element={<CrmCustomers />} />
              <Route path="/crm/leads" element={<CrmLeads />} />
              <Route path="/crm/deals" element={<CrmDeals />} />

              {/* Project Management */}
              <Route
                path="/project-management/project-overview/"
                element={<ProjectOverview />}
              />
              <Route
                path="/project-management/projects-list/"
                element={<ProjectsList />}
              />
              <Route
                path="/project-management/create-project/"
                element={<CreateProject />}
              />
              <Route
                path="/project-management/clients/"
                element={<Clients />}
              />
              <Route path="/project-management/teams/" element={<Teams />} />
              <Route
                path="/project-management/kanban-board/"
                element={<PmKanbanBoard />}
              />
              <Route path="/project-management/users/" element={<PmUsers />} />

              {/* LMS */}
              <Route path="/lms/courses/" element={<Courses />} />
              <Route path="/lms/courses/details" element={<CoursesDetails />} />
              <Route
                path="/lms/courses/lesson-preview"
                element={<LessonPreview />}
              />
              <Route path="/lms/create-course" element={<CreateCourse />} />
              <Route path="/lms/edit-course" element={<EditCourse />} />
              <Route path="/lms/instructors" element={<Instructors />} />

              {/* Helpdesk */}
              <Route path="/helpdesk/tickets" element={<Tickets />} />
              <Route
                path="/helpdesk/tickets/details"
                element={<TicketsDetails />}
              />
              <Route path="/helpdesk/agents" element={<Agents />} />
              <Route path="/helpdesk/reports" element={<Reports />} />

              {/* NFT */}
              <Route path="/nft/marketplace" element={<Marketplace />} />
              <Route path="/nft/explore-all" element={<ExploreAll />} />
              <Route path="/nft/live-auction" element={<LiveAuction />} />
              <Route path="/nft/details" element={<NftDetails />} />
              <Route path="/nft/creators" element={<NftCreators />} />
              <Route
                path="/nft/creators/details"
                element={<NftCreatorDetails />}
              />
              <Route path="/nft/wallet-connect" element={<WalletConnect />} />
              <Route path="/nft/create" element={<CreateNft />} />

              {/* Real Estate */}
              <Route
                path="/real-estate/property-list/"
                element={<PropertyList />}
              />
              <Route
                path="/real-estate/property-details/"
                element={<PropertyDetails />}
              />
              <Route
                path="/real-estate/add-property/"
                element={<AddProperty />}
              />
              <Route path="/real-estate/agents/" element={<ReAgents />} />
              <Route
                path="/real-estate/agents/details"
                element={<ReAgentsDetails />}
              />
              <Route path="/real-estate/agents/add" element={<AddAgents />} />
              <Route path="/real-estate/customers" element={<ReCustomers />} />

              {/* Finance */}
              <Route path="/finance/wallet" element={<Wallet />} />
              <Route path="/finance/transactions" element={<Transactions />} />

              {/* Doctor */}
              <Route path="/doctor/patients-list" element={<PatientsList />} />
              <Route path="/doctor/add-patient" element={<AddPatient />} />
              <Route
                path="/doctor/patient-details"
                element={<PatientDetails />}
              />
              <Route path="/doctor/appointments" element={<Appointments />} />
              <Route path="/doctor/prescriptions" element={<Prescriptions />} />
              <Route
                path="/doctor/write-prescription"
                element={<WritePrescription />}
              />

              {/* Restaurant */}
              <Route path="/restaurant/menus" element={<Menus />} />
              <Route
                path="/restaurant/dish-details"
                element={<DishDetails />}
              />

              {/* Hotel */}
              <Route path="/hotel/rooms-list" element={<RoomsList />} />
              <Route path="/hotel/room-details" element={<RoomDetails />} />
              <Route path="/hotel/guests-list" element={<GuestsList />} />

              {/* Real Estate Agent */}
              <Route
                path="/real-estate-agent/properties"
                element={<Properties />}
              />
              <Route
                path="/real-estate-agent/property-details"
                element={<ReaPropertyDetails />}
              />

              {/* Crypto Trader */}
              <Route
                path="/crypto-trader/transactions"
                element={<CtTransactions />}
              />
              <Route
                path="/crypto-trader/gainers-losers"
                element={<GainersLosers />}
              />
              <Route
                path="/crypto-trader/wallet"
                element={<CtWallet />}
              />

              {/* Events */}
              <Route path="/events" element={<Events />} />
              <Route path="/events/events-list" element={<EventsList />} />
              <Route
                path="/events/events-details"
                element={<EventsDetails />}
              />
              <Route
                path="/events/create-an-event"
                element={<CreateAnEvent />}
              />
              <Route path="/events/edit-an-event" element={<EditAnEvent />} />

              {/* Social */}
              <Route path="/social/profile" element={<SProfile />} />
              <Route path="/social/about" element={<SAbout />} />
              <Route path="/social/activity" element={<SActivity />} />
              <Route
                path="/social/sttings"
                element={<SosialProfileSettings />}
              />

              {/* Invoices */}
              <Route path="/invoices" element={<Invoices />} />
              <Route
                path="/invoices/invoices-details"
                element={<InvoicesDetails />}
              />
              <Route
                path="/invoices/create-invoice"
                element={<CreateInvoice />}
              />
              <Route path="/invoices/edit-invoice" element={<EditInvoice />} />

              {/* Users */}
              <Route path="/users" element={<Users />} />
              <Route path="/users/users-list" element={<UsersList />} />
              <Route path="/users/add-user" element={<AddUsers />} />

              {/* Profile */}
              <Route path="/profile" element={<UserProfile />} />
              <Route path="/profile/teams" element={<TeamsProfile />} />
              <Route path="/profile/projects" element={<MyProjects />} />

              <Route path="/starter" element={<Starter />} />

              {/* icons */}
              <Route
                path="/icons/material-symbols"
                element={<MaterialSymbols />}
              />
              <Route path="/icons/remixicon" element={<Remixicon />} />

              {/* ui-kit */}
              <Route path="/ui-kit/autocomplete" element={<Autocomplete />} />
              <Route path="/ui-kit/buttons" element={<Buttons />} />
              <Route path="/ui-kit/checkbox" element={<Checkbox />} />
              <Route path="/ui-kit/radio" element={<Radio />} />
              <Route path="/ui-kit/rating" element={<Rating />} />
              <Route path="/ui-kit/select" element={<Select />} />
              <Route path="/ui-kit/slider" element={<Slider />} />
              <Route path="/ui-kit/switch" element={<Switch />} />
              <Route path="/ui-kit/transfer-list" element={<TransferList />} />
              <Route path="/ui-kit/avatar" element={<Avatar />} />
              <Route path="/ui-kit/badge" element={<Badge />} />
              <Route path="/ui-kit/Chip" element={<Chip />} />
              <Route path="/ui-kit/divider" element={<Divider />} />
              <Route path="/ui-kit/table" element={<Table />} />
              <Route path="/ui-kit/tooltip" element={<Tooltip />} />
              <Route path="/ui-kit/typography" element={<Typography />} />
              <Route path="/ui-kit/alerts" element={<Alerts />} />
              <Route path="/ui-kit/dialog" element={<Dialog />} />
              <Route path="/ui-kit/progress" element={<Progress />} />
              <Route path="/ui-kit/snackbar" element={<Snackbar />} />
              <Route path="/ui-kit/accordion" element={<Accordion />} />
              <Route path="/ui-kit/card" element={<Card />} />
              <Route path="/ui-kit/breadcrumbs" element={<Breadcrumbs />} />
              <Route path="/ui-kit/pagination" element={<Pagination />} />
              <Route path="/ui-kit/speed-dial" element={<SpeedDial />} />
              <Route path="/ui-kit/stepper" element={<Stepper />} />
              <Route path="/ui-kit/tabs" element={<Tabs />} />
              <Route path="/ui-kit/image-list" element={<ImageList />} />
              <Route path="/ui-kit/transitions" element={<Transitions />} />
              <Route path="/ui-kit/tree-view" element={<TreeView />} />
              <Route path="/ui-kit/masonry" element={<Masonry />} />
              <Route path="/ui-kit/timeline" element={<UITimeline />} />

              {/* Tables */}
              <Route path="/tables/basic-table/" element={<BasicTables />} />
              <Route path="/tables/data-table/" element={<DataTables />} />

              {/* Forms */}
              <Route
                path="/forms/basic-elements/"
                element={<BasicElements />}
              />
              <Route
                path="/forms/advanced-elements/"
                element={<AdvancedElements />}
              />
              <Route path="/forms/editors/" element={<Editors />} />
              <Route path="/forms/file-uploader/" element={<FileUploader />} />

              {/* Charts */}
              <Route path="/charts/line/" element={<Line />} />
              <Route path="/charts/area/" element={<Area />} />
              <Route path="/charts/column/" element={<Column />} />
              <Route path="/charts/mixed/" element={<Mixed />} />
              <Route path="/charts/radialbar/" element={<Radialbar />} />
              <Route path="/charts/radar/" element={<Radar />} />
              <Route path="/charts/pie/" element={<Pie />} />
              <Route path="/charts/polar/" element={<Polar />} />
              <Route path="/charts/more/" element={<More />} />

              {/* Authentication */}
              <Route path="/authentication/sign-in/" element={<SignIn />} />
              <Route path="/authentication/sign-up/" element={<SignUp />} />
              <Route
                path="/authentication/forgot-password/"
                element={<ForgotPassword />}
              />
              <Route
                path="/authentication/reset-password/"
                element={<ResetPassword />}
              />
              <Route
                path="/authentication/confirm-email/"
                element={<ConfirmEmail />}
              />
              <Route
                path="/authentication/lock-screen/"
                element={<LockScreen />}
              />
              <Route path="/authentication/logout/" element={<Logout />} />

              {/* Extra Pages */}
              <Route path="/pricing/" element={<Pricing />} />
              <Route path="/timeline/" element={<Timeline />} />
              <Route path="/extra-faq/" element={<ExtraFaq />} />
              <Route path="/gallery/" element={<Gallery />} />
              <Route path="/testimonials/" element={<Testimonials />} />
              <Route path="/search/" element={<Search />} />
              <Route path="/coming-soon/" element={<ComingSoon />} />
              <Route path="/blank-page/" element={<BlankPage />} />
              <Route path="/not-found/" element={<NotFound />} />
              <Route path="/internal-error/" element={<InternalError />} />

              <Route path="/widgets/" element={<Widgets />} />
              <Route path="/maps/" element={<Maps />} />
              <Route path="/notifications/" element={<Notifications />} />
              <Route path="/members/" element={<Members />} />
              <Route path="/my-profile/" element={<MyProfile />} />

              {/* Settings */}
              <Route
                path="/settings/account-settings/"
                element={<AccountSettings />}
              />
              <Route
                path="/settings/change-password/"
                element={<ChangePassword />}
              />
              <Route path="/settings/connections/" element={<Connections />} />
              <Route
                path="/settings/privacy-policy/"
                element={<PrivacyPolicy />}
              />
              <Route
                path="/settings/terms-conditions/"
                element={<TermsConditions />}
              />
            </Routes>

            {!isAuthPage && <Footer />}
          </div>
        </Router>
      </div>
    </>
  );
};

export default App;
