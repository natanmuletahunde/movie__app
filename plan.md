# 🚀 MASTER PROMPT — Add Profile and Saved Functionality to Existing Expo Movie App

## SYSTEM CONTEXT

You are working on an already completed and fully functional Movie App built using:

* Expo (React Native)
* Expo Router (file-based routing)
* TypeScript
* Tailwind CSS (NativeWind)
* FlatList for movie rendering
* Movie API integration (already implemented)
* Tabs navigation structure already exists:

  * Home
  * Search
  * Saved (exists but not fully implemented)
  * Profile (exists but not fully implemented)

The app is fully working. DO NOT break, refactor, or modify any existing functionality.

---

## STRICT RULES (VERY IMPORTANT)

1. ❌ DO NOT modify existing files unless absolutely necessary for Saved/Profile functionality.
2. ❌ DO NOT change existing Home, Search, Movie Details, or navigation logic.
3. ❌ DO NOT rename files or folders.
4. ❌ DO NOT remove or refactor existing components.
5. ✅ ONLY add new functionality and UI for:

   * Saved page
   * Profile page
6. ✅ Follow the existing project architecture and coding style.
7. ✅ Use clean, modular, production-level code.

---

# FEATURE 1: Saved Movies Functionality

## Functional Requirements

Implement a complete Saved Movies system that allows users to:

* Save a movie from:

  * Home screen
  * Search screen
  * Movie Details screen

* Remove saved movies

* View saved movies in the Saved tab

* Persist saved movies locally

---

## Storage Requirements

Use:

* AsyncStorage (preferred)
  OR
* Zustand with AsyncStorage persistence

Saved movies must persist after app restart.

Saved movie object structure must include:

* id
* title
* poster_path
* release_date
* vote_average
* overview
* backdrop_path

---

## Saved Page UI Requirements

The Saved page must include:

* Beautiful modern UI

* Large header:
  "Saved Movies"

* If no saved movies:

  * Show empty state illustration
  * Show text:
    "No saved movies yet"

* If saved movies exist:

  * Display using FlatList
  * Grid layout (2 columns)
  * Movie cards with:

    * Poster image
    * Title
    * Rating
    * Release year
    * Remove bookmark button

* Smooth animations

* Modern spacing

* Rounded cards

* Shadow and elevation

---

## Movie Card Save Button

Each MovieCard must include:

* Save button (bookmark icon)
* Toggle functionality:

  * Save movie
  * Remove movie

Visual states:

Saved:

* Filled bookmark icon

Not saved:

* Outline bookmark icon

---

# FEATURE 2: Profile Page Functionality and UI

Create a beautiful, modern, premium Profile screen.

This is a UI-focused profile (no backend required).

---

## Profile UI Requirements

Top Section:

* Large profile avatar
* Username
* Subtitle text (example: "Movie Explorer")

Stats Section:

* Saved movies count
* Watched movies count (optional placeholder)
* Favorite genre (optional placeholder)

Options Section:

Beautiful settings list:

* Edit Profile
* Saved Movies
* App Theme
* Notifications
* About App

Each option must include:

* Icon
* Title
* Chevron arrow

---

## UI Design Requirements

Must include:

* Modern dark theme
* Gradient or premium styling
* Proper spacing
* Rounded containers
* Clean typography
* Professional layout
* Production-level design

Use NativeWind styling.

---

# Navigation Requirements

Saved page must:

* Open Movie Details when a movie is clicked

Profile page must:

* Navigate to Saved page when "Saved Movies" is clicked

---

# Architecture Requirements

Create new:

* store for saved movies (Zustand or Context)
  OR
* AsyncStorage helper

Create reusable components:

* ProfileHeader
* ProfileOptionItem
* SavedMovieCard

---

# Performance Requirements

* No unnecessary re-renders
* Efficient FlatList usage
* Proper keyExtractor usage
* Optimized image loading

---

# Animation Requirements (Optional but Preferred)

Use:

* LayoutAnimation
  OR
* Reanimated
  OR
* simple animated press effects

---

# Final Goal

Add a complete, production-ready:

* Saved Movies system
* Beautiful Saved Page UI
* Premium Profile Page UI

WITHOUT breaking or modifying existing functionality.

The result must feel like a real production-level movie streaming app.

---

# Output Requirements

Provide:

* Only the necessary new files
* Only minimal safe modifications if required
* Clean, organized, scalable code



and also fix this error
 ERROR  Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version. .$1726

Call Stack
  construct (<native>)
  apply (<native>)
  _construct (node_modules\@babel\runtime\helpers\construct.js) 
  Wrapper (node_modules\@babel\runtime\helpers\wrapNativeSuper.js)
  construct (<native>)
  _callSuper (node_modules\@babel\runtime\helpers\callSuper.js) 
  NamelessError (node_modules\@expo\metro-runtime\src\metroServerLogs.native.ts)
  captureCurrentStack (node_modules\@expo\metro-runtime\src\metroServerLogs.native.ts)
  HMRClient.log (node_modules\@expo\metro-runtime\src\metroServerLogs.native.ts)
  console.level (node_modules\react-native\Libraries\Core\setUpDeveloperTools.js)
  runWithFiberInDEV$argument_1 (node_modules\react-native\Libraries\Renderer\implementations\ReactFabric-dev.js)
  runWithFiberInDEV (node_modules\react-native\Libraries\Renderer\implementations\ReactFabric-dev.js)
  warnOnInvalidKey (node_modules\react-native\Libraries\Renderer\implementations\ReactFabric-dev.js)
  reconcileChildrenArray (node_modules\react-native\Libraries\Renderer\implementations\ReactFabric-dev.js)
  reconcileChildFibersImpl (node_modules\react-native\Libraries\Renderer\implementations\ReactFabric-dev.js)
  <anonymous> (node_modules\react-native\Libraries\Renderer\implementations\ReactFabric-dev.js)
  reconcileChildren (node_modules\react-native\Libraries\Renderer\implementations\ReactFabric-dev.js)
  beginWork (node_modules\react-native\Libraries\Renderer\implementations\ReactFabric-dev.js)
  runWithFiberInDEV (node_modules\react-native\Libraries\Renderer\implementations\ReactFabric-dev.js)
  performUnitOfWork (node_modules\react-native\Libraries\Renderer\implementations\ReactFabric-dev.js)
  workLoopSync (node_modules\react-native\Libraries\Renderer\implementations\ReactFabric-dev.js)
  renderRootSync (node_modules\react-native\Libraries\Renderer\implementations\ReactFabric-dev.js)
  performWorkOnRoot (node_modules\react-native\Libraries\Renderer\implementations\ReactFabric-dev.js)
  performWorkOnRootViaSchedulerTask (node_modules\react-native\Libraries\Renderer\implementations\ReactFabric-dev.js)

Call Stack
  call (<native>)
  apply (<native>)
  <anonymous> (node_modules\react-native-css-interop\dist\runtime\wrap-jsx.js)
  _pushCells (node_modules\react-native\node_modules\@react-native\virtualized-lists\Lists\VirtualizedList.js)
  _pushCells (node_modules\react-native\node_modules\@react-native\virtualized-lists\Lists\VirtualizedList.js)
  render (node_modules\react-native\node_modules\@react-native\virtualized-lists\Lists\VirtualizedList.js)
  RemapPropsComponent (node_modules\react-native-css-interop\dist\runtime\native\api.js)
  call (<native>)
  apply (<native>)
  <anonymous> (node_modules\react-native-css-interop\dist\runtime\wrap-jsx.js)
  render (node_modules\react-native\Libraries\Lists\FlatList.js)
  RemapPropsComponent (node_modules\react-native-css-interop\dist\runtime\native\api.js)
  call (<native>)
  apply (<native>)
  <anonymous> (node_modules\react-native-css-interop\dist\runtime\wrap-jsx.js)
  Index (app\(tabs)\index.tsx)
  call (<native>)
  apply (<native>)
  <anonymous> (node_modules\react-native-css-interop\dist\runtime\wrap-jsx.js)
  BaseRoute (node_modules\expo-router\build\useScreens.js)      
  SceneView (node_modules\@react-navigation\core\lib\module\SceneView.js)
  render (node_modules\@react-navigation\core\lib\module\useDescriptors.js)
  routes.reduce$argument_0 (node_modules\@react-navigation\core\lib\module\useDescriptors.js)
  reduce (<native>)
  useDescriptors (node_modules\@react-navigation\core\lib\module\useDescriptors.js)
  useNavigationBuilder (node_modules\@react-navigation\core\lib\module\useNavigationBuilder.js)
  BottomTabNavigator (node_modules\@react-navigation\bottom-tabs\lib\module\navigators\createBottomTabNavigator.js)
  call (<native>)
  apply (<native>)
  <anonymous> (node_modules\react-native-css-interop\dist\runtime\wrap-jsx.js)
  <anonymous> (node_modules\expo-router\build\layouts\withLayoutContext.js)
  call (<native>)
  apply (<native>)
  <anonymous> (node_modules\react-native-css-interop\dist\runtime\wrap-jsx.js)
  Object.assign$argument_0 (node_modules\expo-router\build\layouts\TabsClient.js)
  call (<native>)
  apply (<native>)
  <anonymous> (node_modules\react-native-css-interop\dist\runtime\wrap-jsx.js)
  TabsLayout (app\(tabs)\_layout.tsx)
  call (<native>)
  apply (<native>)
  <anonymous> (node_modules\react-native-css-interop\dist\runtime\wrap-jsx.js)
  BaseRoute (node_modules\expo-router\build\useScreens.js)      
  SceneView (node_modules\@react-navigation\core\lib\module\SceneView.js)
  render (node_modules\@react-navigation\core\lib\module\useDescriptors.js)
  routes.reduce$argument_0 (node_modules\@react-navigation\core\lib\module\useDescriptors.js)
  reduce (<native>)
  useDescriptors (node_modules\@react-navigation\core\lib\module\useDescriptors.js)
  useNavigationBuilder (node_modules\@react-navigation\core\lib\module\useNavigationBuilder.js)
  NativeStackNavigator (node_modules\expo-router\build\fork\native-stack\createNativeStackNavigator.js)
  call (<native>)
  apply (<native>)
  <anonymous> (node_modules\react-native-css-interop\dist\runtime\wrap-jsx.js)
  <anonymous> (node_modules\expo-router\build\layouts\withLayoutContext.js)
  call (<native>)
  apply (<native>)
  <anonymous> (node_modules\react-native-css-interop\dist\runtime\wrap-jsx.js)
  Object.assign$argument_0 (node_modules\expo-router\build\layouts\StackClient.js)
  call (<native>)
  apply (<native>)
  <anonymous> (node_modules\react-native-css-interop\dist\runtime\wrap-jsx.js)
  RootLayout (app\_layout.tsx)
  call (<native>)
  apply (<native>)
  <anonymous> (node_modules\react-native-css-interop\dist\runtime\wrap-jsx.js)
  BaseRoute (node_modules\expo-router\build\useScreens.js)      
  SceneView (node_modules\@react-navigation\core\lib\module\SceneView.js)
  render (node_modules\@react-navigation\core\lib\module\useDescriptors.js)
  routes.reduce$argument_0 (node_modules\@react-navigation\core\lib\module\useDescriptors.js)
  reduce (<native>)
  useDescriptors (node_modules\@react-navigation\core\lib\module\useDescriptors.js)
  useNavigationBuilder (node_modules\@react-navigation\core\lib\module\useNavigationBuilder.js)
  Content (node_modules\expo-router\build\ExpoRoot.js)
  call (<native>)
  apply (<native>)
  <anonymous> (node_modules\react-native-css-interop\dist\runtime\wrap-jsx.js)
  ContextNavigator (node_modules\expo-router\build\ExpoRoot.js) 
  call (<native>)
  apply (<native>)
  <anonymous> (node_modules\react-native-css-interop\dist\runtime\wrap-jsx.js)
  ExpoRoot (node_modules\expo-router\build\ExpoRoot.js)
  call (<native>)
  apply (<native>)
  <anonymous> (node_modules\react-native-css-interop\dist\runtime\wrap-jsx.js)
  App (node_modules\expo-router\build\qualified-entry.js)       
  call (<native>)
  apply (<native>)
  <anonymous> (node_modules\react-native-css-interop\dist\runtime\wrap-jsx.js)
  WithDevTools (node_modules\expo\src\launch\withDevTools.tsx)  
 WARN  [Layout children]: No route named "save" exists in nested children: ["index", "profile", "saved", "search"] 
 