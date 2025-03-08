## Todo

- [ ] Built the first common example of dialog & drawer component, which will be use as reference
- [ ] Develop the first working version of Native Modal
- [ ] Add Documention
- [ ] Add `Changeset` for managing release's
- [ ] Setup GitHub actions & issue template
- [ ] Port all the examples of dialog & drawer from shadcn & drawer respectively
- [ ] Adapt `useContext` i.e. give end dev/user ability to change between dialog & drawer, which mean moving `useMediaQuery`'s in a context and accept switch value in `<NativeModal />` component as props and use that number in all the component below to switch its style by using CSS Variables.
- [ ] Add a props for styling `Drawer`'s only styles and `Dialog` only styles, something `drawerClassName` and `DialogClassName`. and in docs, add a small step explaining, how they can enable tailwind suggestions for these custom `classNames`, i.e. by just adding them in the settings.
