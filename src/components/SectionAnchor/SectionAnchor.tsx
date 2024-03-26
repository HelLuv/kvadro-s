import styles from './SectionAnchor.module.scss';


interface SectionAnchorProps {
  sectionId: string;
}

export const SectionAnchor = (props: SectionAnchorProps) => {
 const {sectionId} = props;
  return (
      <div className={styles.sectionAnchor} id={sectionId}></div>
  );
};