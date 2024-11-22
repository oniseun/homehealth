const listStyles = {
  ul: {
    marginLeft: "20px",
    marginTop: "10px",
    marginBottom: "20px",
    listStyleType: "disc",
  },
  li: {
    paddingLeft: "10px",
    marginBottom: "10px",
    listStyleType: "disc",
  },
};

const technologies_data = [
  {
    id: "xna",
    main_title: "XNA Technology",
    overview: (
      <>
        DiaCarta's XNA (xenonucleic acid) technology is a cutting-edge
        innovation in precision molecular diagnostics. This proprietary
        technology provides exceptional sensitivity and specificity for
        detecting genetic mutations. XNA's unique ability to selectively amplify
        mutant DNA sequences while suppressing wild-type sequences makes it
        indispensable in early disease detection, particularly in oncology and
        other genetic research areas.
      </>
    ),
    main_image: "/assets/img/research/research-thumb-01.png",
    category: "Technology",
    date: "2024-11-20",
    sections: [
      {
        title: "Introduction to XNA Molecular Clamp Technology",
        text: (
          <>
            XNA technology introduces a novel approach to genetic analysis
            through its molecular clamp mechanism. Xenonucleic acids are
            synthetic nucleic acid analogs engineered to hybridize selectively
            with DNA sequences. These clamps bind tightly to wild-type DNA,
            effectively blocking their amplification during PCR, while allowing
            mutant DNA sequences to proceed with amplification. This precise
            discrimination ensures unparalleled accuracy in detecting genetic
            mutations.
            <ul style={listStyles.ul}>
              <li style={listStyles.li}>
                Highly accurate detection of rare mutations
              </li>
              <li style={listStyles.li}>
                Wide application across oncology and precision medicine
              </li>
              <li style={listStyles.li}>
                Enhanced sensitivity in detecting low-frequency mutations
              </li>
            </ul>
          </>
        ),
        img: "/assets/img/research/xna-intro.jpg",
      },
      {
        title: "Applications in Cancer Mutation Detection",
        text: (
          <>
            Cancer diagnostics rely heavily on identifying driver mutations in
            genes involved in tumorigenesis and cell growth regulation. XNA
            technology excels in detecting these critical mutations, enabling
            early diagnosis and targeted treatments. With its exceptional
            sensitivity, XNA can identify mutations at very low variant allele
            frequencies, even in challenging sample types such as liquid
            biopsies.
          </>
        ),
        img: "/assets/img/research/xna-cancer-detection.jpg",
      },
      {
        title: "Enhanced Sensitivity with Liquid Biopsy and FFPE Samples",
        text: (
          <>
            XNA molecular clamps exhibit remarkable sensitivity when used with
            challenging sample types, such as liquid biopsy and formalin-fixed
            paraffin-embedded (FFPE) samples. This technology can identify
            mutations with variant allele frequencies as low as 0.1% to 0.5%,
            making it suitable for early disease detection and monitoring.
            <ul style={listStyles.ul}>
              <li style={listStyles.li}>Minimal DNA input required</li>
              <li style={listStyles.li}>
                Highly effective with degraded or low-quality samples
              </li>
              <li style={listStyles.li}>
                Applicable in diverse clinical settings
              </li>
            </ul>
          </>
        ),
        img: "/assets/img/research/xna-sensitivity.jpg",
      },
      {
        title: "Integration with Sequencing Technologies",
        text: (
          <>
            XNA technology integrates seamlessly with sequencing methods such as
            Sanger sequencing and next-generation sequencing (NGS),
            significantly enhancing the sensitivity of mutation detection
            assays. This integration reduces sequencing depth requirements,
            saving time and resources while improving diagnostic accuracy.
          </>
        ),
        img: "/assets/img/research/xna-sequencing.jpg",
      },
      {
        title: "Case Study: ColoScape™ Colorectal Cancer Detection",
        text: (
          <>
            An example of XNA technology in action is the ColoScape™ colorectal
            cancer mutation detection kit. Designed for FFPE and liquid biopsy
            samples, it targets multiple colorectal cancer-associated genes,
            providing early and precise detection to guide personalized
            treatment strategies.
            <ul style={listStyles.ul}>
              <li style={listStyles.li}>
                Works with both FFPE and liquid biopsy samples
              </li>
              <li style={listStyles.li}>
                Targets multiple genes critical for colorectal cancer
              </li>
              <li style={listStyles.li}>
                Empowers personalized treatment planning
              </li>
            </ul>
          </>
        ),
        img: "/assets/img/research/coloscape.jpg",
      },
    ],
  },
  {
    id: "isobdna",
    main_title: "isobDNA™ Technology",
    overview: (
      <>
        DiaCarta's isobDNA™ technology utilizes isoC-isoG branched DNA to
        qualitatively and quantitatively measure target DNA or RNA. Unlike
        traditional PCR methods, isobDNA™ amplifies detection signals without
        amplifying the DNA or RNA itself, reducing contamination risks and
        enhancing accuracy.
      </>
    ),
    main_image: "/assets/img/research/research-thumb-02.png",
    category: "Technology",
    date: "2024-11-20",
    sections: [
      {
        title: "Principle and Workflow of isobDNA™ Technology",
        text: (
          <>
            isobDNA™ employs a series of hybridization events to capture target
            sequences and connect labeled probes for chemiluminescent signal
            amplification. This "sandwich" structure efficiently captures and
            quantifies targets, achieving signal amplification ranging from 500
            to 10 million molecules.
            <ul style={listStyles.ul}>
              <li style={listStyles.li}>
                Capture probes hybridize with target-specific sequences.
              </li>
              <li style={listStyles.li}>
                Preamplifier and amplifier probes labeled with alkaline
                phosphatase are added to form the "sandwich" structure.
              </li>
              <li style={listStyles.li}>
                Addition of substrate leads to chemiluminescent signal detection.
              </li>
            </ul>
          </>
        ),
        img: "/assets/img/research/isobdna-workflow.jpg",
      },
      {
        title: "Advantages Over Traditional PCR Methods",
        text: (
          <>
            While PCR and RT-PCR are powerful diagnostic tools, they have
            limitations such as cross-contamination risks due to DNA
            amplification. isobDNA™ technology mitigates these issues by
            amplifying detection signals instead of the DNA or RNA, resulting in
            more accurate quantification.
            <ul style={listStyles.ul}>
              <li style={listStyles.li}>
                Reduces cross-contamination risks associated with DNA
                amplification.
              </li>
              <li style={listStyles.li}>
                Provides reliable quantification across various target
                concentrations.
              </li>
              <li style={listStyles.li}>
                Demonstrates strong correlation with RT-PCR in gene expression
                analysis.
              </li>
            </ul>
          </>
        ),
        img: "/assets/img/research/isobdna-advantages.jpg",
      },
      {
        title: "Applications of isobDNA™ Technology",
        text: (
          <>
            isobDNA™ is versatile and can be applied in various areas, including
            pathogen detection, biomarker quantitation, gene expression analysis,
            and in situ hybridization.
            <ul style={listStyles.ul}>
              <li style={listStyles.li}>
                <strong>Gene Expression Analysis:</strong> Ideal for companion
                diagnostics with rapid turnaround and high sensitivity.
              </li>
              <li style={listStyles.li}>
                <strong>Pathogen Detection:</strong> Detects viruses, fungi, and
                bacteria without target purification or amplification.
              </li>
              <li style={listStyles.li}>
                <strong>In Situ Hybridization:</strong> Enables single-molecule
                detection compatible with various tissue types and microscopy
                methods.
              </li>
            </ul>
          </>
        ),
        img: "/assets/img/research/isobdna-applications.jpg",
      },
      {
        title: "Featured Application: QuantiVirus™ HPV E6/E7 mRNA Test",
        text: (
          <>
            The QuantiVirus™ HPV E6/E7 mRNA Test utilizes isobDNA™ technology to
            detect high-risk HPV infections by targeting E6/E7 mRNA. This test
            aids in predicting pre-cancerous conditions in cervical and head &
            neck cancer screenings.
            <ul style={listStyles.ul}>
              <li style={listStyles.li}>
                Detects E6/E7 mRNA from high-risk HPV types.
              </li>
              <li style={listStyles.li}>
                Assists in early identification of pre-cancerous conditions.
              </li>
              <li style={listStyles.li}>
                Enhances screening accuracy for cervical and head & neck cancers.
              </li>
            </ul>
          </>
        ),
        img: "/assets/img/research/quantivirus-hpv.jpg",
      },
    ],
  },
];

export default technologies_data;