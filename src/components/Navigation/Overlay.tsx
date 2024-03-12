interface Props {
  isDrawerOpen: boolean,
  closeDrawer(): void
}

export default function Overlay({ isDrawerOpen, closeDrawer }: Props) {
  return isDrawerOpen && (
    <div className=" fixed top-0 left-0 inset-0 z-40 bg-black opacity-85 transition-transform duration-200 ease-in-out " onClick={closeDrawer}></div>
  )
}
