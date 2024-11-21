const products_data = [
    {
        id: "coloscape",
        productTitle: "ColoScape™",
        productImage: "/assets/img/products/coloscape.png",
        shortDescription: "Colorectal cancer screening and FIT-positive triage test.",
        category: "oncology",
        subCategory: "Colorectal Cancer",
        productDetails: [
            {
                sectionTitle: "Overview",
                description:
                    "ColoScape™ is a highly sensitive in vitro diagnostic assay developed to detect colorectal cancer-associated gene mutations. It uses a qPCR-based multi-gene panel for qualitative detection in liquid biopsy and FFPE tissue samples. This advanced screening test supports early detection and FIT-positive triage for colorectal cancer patients, improving clinical outcomes and patient management.",
            },
            {
                sectionTitle: "Technology",
                description:
                    "ColoScape™ utilizes Xenonucleic Acid (XNA) technology to suppress PCR amplification of wild-type DNA, selectively amplifying mutant DNA templates. This allows it to achieve high sensitivity for detecting mutations with 0.1% to 0.5% Variant Allele Frequency (VAF) using as little as 10 ng of DNA input.",
            },
            {
                sectionTitle: "Clinical Utility",
                description:
                    "The assay supports colorectal cancer early detection and serves as a FIT-positive triage test. It aids in identifying patients who require further investigation, thus optimizing resource utilization in healthcare settings. Its non-invasive liquid biopsy option makes it a patient-friendly diagnostic tool.",
            },
            {
                sectionTitle: "Workflow",
                description:
                    "The test workflow is streamlined for ease of use in clinical laboratories. It involves DNA extraction, qPCR amplification using the ColoScape™ kit, and mutation analysis using validated software.",
            },
        ],
        additionalData: [
            { key: "Test Type", value: "In vitro diagnostic (IVD) assay" },
            { key: "Detection Method", value: "qPCR-based multi-gene panel" },
            { key: "Technology", value: "Xenonucleic Acid (XNA) technology" },
            { key: "Sensitivity", value: "0.1% - 0.5% Variant Allele Frequency (VAF)" },
            { key: "Sample Types", value: "Liquid biopsy and FFPE tissue samples" },
            { key: "DNA Input Requirement", value: "10 ng DNA input" },
            { key: "Clinical Applications", value: "Early detection and FIT-positive triage for colorectal cancer" },
            { key: "Regulatory Status", value: "For research use only; not for diagnostic procedures" },
            { key: "Compatible Equipment", value: "Standard qPCR instruments" },
            { key: "Turnaround Time", value: "Approximately 4 hours" },
        ],
        faq: [
            {
                question: "What is ColoScape™?",
                answer:
                    "ColoScape™ is an in vitro diagnostic test designed for early detection of colorectal cancer and as a FIT-positive triage test. It uses qPCR-based multi-gene panels to detect cancer-associated gene mutations in liquid biopsy and FFPE tissue samples.",
            },
            {
                question: "What technology does ColoScape™ use?",
                answer:
                    "ColoScape™ utilizes Xenonucleic Acid (XNA) technology to suppress PCR amplification of wild-type DNA and selectively amplify mutant DNA templates, enabling high sensitivity in mutation detection.",
            },
            {
                question: "What is the sensitivity of ColoScape™?",
                answer:
                    "ColoScape™ achieves a sensitivity of 0.1% to 0.5% Variant Allele Frequency (VAF) with as little as 10 ng of DNA input.",
            },
            {
                question: "What sample types are compatible with ColoScape™?",
                answer:
                    "ColoScape™ is compatible with liquid biopsy samples and Formalin-Fixed Paraffin-Embedded (FFPE) tissue samples.",
            },
            {
                question: "How is ColoScape™ used as a FIT-positive triage test?",
                answer:
                    "ColoScape™ is used to further evaluate patients with positive Fecal Immunochemical Test (FIT) results. It helps identify patients who may require additional diagnostic procedures like colonoscopy.",
            },
            {
                question: "Is ColoScape™ approved for diagnostic use?",
                answer:
                    "Currently, ColoScape™ is for research use only and is not approved for diagnostic procedures.",
            },
            {
                question: "What equipment is required to run ColoScape™?",
                answer:
                    "ColoScape™ requires standard qPCR instruments for amplification and mutation analysis.",
            },
            {
                question: "What is the typical turnaround time for results?",
                answer: "The test takes approximately 4 hours to complete.",
            },
            {
                question: "What clinical conditions does ColoScape™ target?",
                answer:
                    "ColoScape™ is designed to detect gene mutations associated with colorectal cancer.",
            },
            {
                question: "Can ColoScape™ detect other types of cancer?",
                answer:
                    "ColoScape™ is specifically optimized for colorectal cancer detection and is not validated for other cancer types.",
            },
        ],
        productLink:
            "https://www.diacarta.com/products/coloscape-colorectal-cancer-mutation-detection-test",
    }, {
        id: "optiseq-colorectal-cancer",
        productTitle: "OptiSeq™ Colorectal Cancer NGS Panel",
        category: "oncology",
        subCategory: "Colorectal Cancer",
        shortDescription:
            "A highly advanced NGS panel for colorectal cancer mutation detection.",
        productImage: "/assets/img/products/optiseq-colorectal.png",
        productDetails: [
            {
                sectionTitle: "Overview",
                description:
                    "The OptiSeq™ Colorectal Cancer NGS Panel is a next-generation sequencing (NGS) solution specifically designed to detect gene mutations associated with colorectal cancer. It provides comprehensive genomic profiling for better disease management and precision medicine applications.",
            },
            {
                sectionTitle: "Technology",
                description:
                    "This panel leverages state-of-the-art NGS technology, providing high sensitivity and specificity. With robust coverage of critical genes, it ensures reliable detection of somatic mutations with Variant Allele Frequencies (VAF) as low as 1%.",
            },
            {
                sectionTitle: "Clinical Utility",
                description:
                    "This panel aids in identifying actionable genetic mutations in colorectal cancer patients, enabling clinicians to select personalized treatment options. It is also used for clinical research and drug development.",
            },
            {
                sectionTitle: "Key Features",
                description:
                    "The panel is optimized for high throughput, supporting efficient workflows with minimal hands-on time. It is compatible with multiple NGS platforms and includes automated data analysis pipelines for easy interpretation of results.",
            },
        ],
        additionalData: [
            { key: "Panel Type", value: "NGS Targeted Sequencing Panel" },
            { key: "Application", value: "Colorectal Cancer Mutation Detection" },
            { key: "Sensitivity", value: "1% Variant Allele Frequency (VAF)" },
            { key: "Sample Types", value: "Liquid biopsy and FFPE tissue" },
            { key: "Target Genes", value: "APC, KRAS, TP53, and more" },
            { key: "Turnaround Time", value: "Approximately 48 hours" },
            { key: "NGS Platforms", value: "Illumina, Thermo Fisher, and others" },
            { key: "Data Analysis", value: "Automated with customizable reports" },
            { key: "Intended Use", value: "For research use only" },
        ],
        faq: [
            {
                question: "What is the OptiSeq™ Colorectal Cancer NGS Panel?",
                answer:
                    "It is an NGS-based targeted sequencing panel designed to detect genetic mutations associated with colorectal cancer for clinical research and precision medicine.",
            },
            {
                question: "What sample types are supported?",
                answer:
                    "The panel supports both liquid biopsy samples and Formalin-Fixed Paraffin-Embedded (FFPE) tissue samples.",
            },
            {
                question: "What is the sensitivity of the panel?",
                answer:
                    "The panel can detect mutations with a Variant Allele Frequency (VAF) as low as 1%.",
            },
            {
                question: "Can this panel be used for diagnostic purposes?",
                answer:
                    "Currently, the OptiSeq™ Colorectal Cancer NGS Panel is intended for research use only.",
            },
            {
                question: "What genes are covered in the panel?",
                answer:
                    "The panel includes key colorectal cancer genes such as APC, KRAS, TP53, and others.",
            },
            {
                question: "Is the panel compatible with all NGS platforms?",
                answer:
                    "The panel is compatible with popular platforms like Illumina and Thermo Fisher systems.",
            },
            {
                question: "How long does it take to complete the sequencing process?",
                answer: "The typical turnaround time is approximately 48 hours.",
            },
        ],
        productLink:
            "https://www.diacarta.com/services/optiseq-ngs-targeted-sequencing/colorectal-cancer",
    },
    {
        id: "ifob-test",
        productTitle: "iFOB Test",
        category: "oncology",
        subCategory: "Colorectal Cancer",
        shortDescription:
            "A highly accurate immunochemical fecal occult blood test for colorectal cancer screening.",
        productImage: "/assets/img/products/ifob-test.png",
        productDetails: [
            {
                sectionTitle: "Overview",
                description:
                    "The iFOB Test is a non-invasive, immunochemical fecal occult blood test designed for the detection of hemoglobin in stool samples. It is widely used for colorectal cancer screening and early diagnosis of gastrointestinal bleeding.",
            },
            {
                sectionTitle: "Technology",
                description:
                    "The test uses antibody-based detection technology to identify human hemoglobin in stool samples. It provides superior specificity and reduces false positives compared to traditional guaiac-based tests.",
            },
            {
                sectionTitle: "Clinical Utility",
                description:
                    "The iFOB Test is an essential tool in colorectal cancer screening programs. It helps identify patients who require further diagnostic procedures, such as colonoscopy, for early detection of cancer or precancerous conditions.",
            },
            {
                sectionTitle: "Ease of Use",
                description:
                    "The test is simple and quick to perform, requiring minimal sample handling. It includes user-friendly instructions and collection kits for patient convenience.",
            },
        ],
        additionalData: [
            { key: "Test Type", value: "Immunochemical Fecal Occult Blood Test" },
            { key: "Detection Method", value: "Antibody-based hemoglobin detection" },
            { key: "Specificity", value: ">95%" },
            { key: "Sensitivity", value: "High sensitivity for hemoglobin levels" },
            { key: "Sample Type", value: "Stool samples" },
            { key: "Intended Use", value: "Colorectal cancer screening" },
            { key: "Clinical Applications", value: "Early detection of GI bleeding" },
            { key: "Regulatory Status", value: "FDA-cleared and CE-marked" },
            { key: "Storage Conditions", value: "2°C to 8°C" },
            { key: "Kit Contents", value: "Test cassettes, buffer solution, sample tubes" },
        ],
        faq: [
            {
                question: "What is the iFOB Test used for?",
                answer:
                    "The iFOB Test is used for colorectal cancer screening and early detection of gastrointestinal bleeding by identifying hemoglobin in stool samples.",
            },
            {
                question: "How does the iFOB Test work?",
                answer:
                    "The test uses antibodies to specifically detect human hemoglobin in stool samples, providing highly accurate results.",
            },
            {
                question: "What is the specificity of the iFOB Test?",
                answer: "The test offers superior specificity, with a rate of over 95%.",
            },
            {
                question: "Is the iFOB Test approved for diagnostic use?",
                answer:
                    "Yes, the iFOB Test is FDA-cleared and CE-marked for clinical use in colorectal cancer screening programs.",
            },
            {
                question: "What are the storage requirements for the test kits?",
                answer:
                    "The test kits should be stored at 2°C to 8°C to maintain their integrity.",
            },
            {
                question: "How long does the test take to complete?",
                answer:
                    "The test results are typically available within 10 to 15 minutes after processing.",
            },
            {
                question: "Can patients collect samples at home?",
                answer:
                    "Yes, the iFOB Test includes user-friendly collection kits for convenient home sample collection.",
            },
        ],
        productLink: "https://www.diacarta.com/products/ifob-test",
    },
    {
        id: "oncuria",
        productTitle: "Oncuria™",
        category: "oncology",
        subCategory: "Bladder Cancer",
        shortDescription:
            "A non-invasive urine-based biomarker test for detecting bladder cancer.",
        productImage: "/assets/img/products/oncuria.png",
        productDetails: [
            {
                sectionTitle: "Overview",
                description:
                    "Oncuria™ is a state-of-the-art biomarker test that uses urine samples to detect bladder cancer with high accuracy. This non-invasive diagnostic tool measures a panel of bladder cancer-associated proteins.",
            },
            {
                sectionTitle: "Technology",
                description:
                    "Oncuria™ leverages a multiplex immunoassay platform to quantify specific protein biomarkers in urine, enabling early detection and monitoring of bladder cancer progression.",
            },
            {
                sectionTitle: "Clinical Utility",
                description:
                    "The test provides clinicians with a reliable, non-invasive alternative to cytology and cystoscopy for bladder cancer diagnosis and monitoring, improving patient outcomes.",
            },
            {
                sectionTitle: "Key Features",
                description:
                    "Oncuria™ offers high sensitivity and specificity, requires only a simple urine sample, and delivers rapid results, making it an essential tool for bladder cancer management.",
            },
        ],
        additionalData: [
            { key: "Test Type", value: "Urine-based biomarker test" },
            { key: "Biomarkers", value: "A panel of bladder cancer-associated proteins" },
            { key: "Sample Type", value: "Urine samples" },
            { key: "Clinical Applications", value: "Bladder cancer diagnosis and monitoring" },
            { key: "Turnaround Time", value: "Approximately 2 days" },
            { key: "Regulatory Status", value: "For research use only" },
            { key: "Accuracy", value: "High sensitivity and specificity" },
        ],
        faq: [
            {
                question: "What is Oncuria™ used for?",
                answer:
                    "Oncuria™ is used for non-invasive detection and monitoring of bladder cancer using urine samples.",
            },
            {
                question: "How accurate is the Oncuria™ test?",
                answer: "The test demonstrates high sensitivity and specificity for bladder cancer detection.",
            },
            {
                question: "What type of sample is required for the test?",
                answer: "A simple urine sample is required for the Oncuria™ test.",
            },
            {
                question: "Can this test replace cystoscopy?",
                answer:
                    "While Oncuria™ provides a non-invasive alternative, it is best used alongside cystoscopy as part of a comprehensive diagnostic approach.",
            },
            {
                question: "What is the turnaround time for results?",
                answer: "Results are typically available within 2 days of sample submission.",
            },
        ],
        productLink: "https://www.diacarta.com/products/oncuria",
    },
    {
        id: "radtox",
        productTitle: "RadTox™",
        category: "oncology",
        subCategory: "Pan-Cancer",
        shortDescription:
            "A radiation toxicity monitoring test to assess patient response to cancer therapy.",
        productImage: "/assets/img/products/radtox.png",
        productDetails: [
            {
                sectionTitle: "Overview",
                description:
                    "RadTox™ is a blood-based test designed to monitor radiation-induced toxicity in cancer patients. It measures specific protein biomarkers to evaluate patient responses to therapy.",
            },
            {
                sectionTitle: "Technology",
                description:
                    "The test utilizes a multiplex immunoassay to detect biomarkers associated with radiation toxicity, enabling precise monitoring of therapy-induced side effects.",
            },
            {
                sectionTitle: "Clinical Utility",
                description:
                    "RadTox™ helps oncologists tailor cancer treatment plans by providing insights into radiation toxicity levels, ensuring effective yet safe treatment regimens.",
            },
            {
                sectionTitle: "Key Features",
                description:
                    "RadTox™ offers rapid results, requires a simple blood sample, and aids in managing radiation therapy by minimizing adverse effects.",
            },
        ],
        additionalData: [
            { key: "Test Type", value: "Blood-based toxicity monitoring test" },
            { key: "Sample Type", value: "Blood" },
            { key: "Biomarkers", value: "Radiation-induced protein markers" },
            { key: "Clinical Applications", value: "Radiation toxicity assessment" },
            { key: "Turnaround Time", value: "1-2 days" },
            { key: "Regulatory Status", value: "For research use only" },
            { key: "Target Patients", value: "Cancer patients undergoing radiation therapy" },
        ],
        faq: [
            {
                question: "What does RadTox™ measure?",
                answer:
                    "RadTox™ measures protein biomarkers associated with radiation-induced toxicity in cancer patients.",
            },
            {
                question: "What sample is needed for the test?",
                answer: "A simple blood sample is required for RadTox™.",
            },
            {
                question: "How does this test benefit cancer patients?",
                answer:
                    "RadTox™ helps oncologists manage radiation therapy by assessing toxicity levels and minimizing adverse effects.",
            },
            {
                question: "Is RadTox™ suitable for all cancer patients?",
                answer: "It is specifically designed for patients undergoing radiation therapy.",
            },
            {
                question: "What is the regulatory status of RadTox™?",
                answer: "The test is intended for research use only.",
            },
        ],
        productLink: "https://www.diacarta.com/products/radtox",
    },
    {
        id: "qclamp-gene-mutation-detection-tests",
        productTitle: "QClamp™ Gene Mutation Detection Tests",
        category: "oncology",
        subCategory: "Pan-Cancer",
        shortDescription:
            "Highly sensitive tests for detecting gene mutations in various cancers.",
        productImage: "/assets/img/products/qclamp.png",
        productDetails: [
            {
                sectionTitle: "Overview",
                description:
                    "QClamp™ Gene Mutation Detection Tests are real-time PCR assays that detect gene mutations in a variety of cancers with high sensitivity and precision.",
            },
            {
                sectionTitle: "Technology",
                description:
                    "The tests use DiaCarta’s proprietary XNA technology to selectively amplify mutant DNA, suppressing wild-type DNA amplification for enhanced accuracy.",
            },
            {
                sectionTitle: "Clinical Utility",
                description:
                    "These tests are used to detect actionable mutations, guide treatment decisions, and monitor cancer progression or recurrence.",
            },
            {
                sectionTitle: "Key Features",
                description:
                    "QClamp™ assays are highly sensitive, require minimal DNA input, and are compatible with multiple sample types, including FFPE tissues and liquid biopsies.",
            },
        ],
        additionalData: [
            { key: "Test Type", value: "Real-time PCR mutation detection assay" },
            { key: "Technology", value: "XNA technology for mutant DNA amplification" },
            { key: "Sample Types", value: "FFPE tissue, blood, plasma" },
            { key: "Clinical Applications", value: "Cancer mutation detection and monitoring" },
            { key: "Sensitivity", value: "1% mutant allele frequency" },
            { key: "Target Genes", value: "EGFR, KRAS, BRAF, and more" },
            { key: "Regulatory Status", value: "For research use only" },
        ],
        faq: [
            {
                question: "What is the purpose of QClamp™ tests?",
                answer:
                    "These tests are designed to detect actionable gene mutations in cancers with high sensitivity.",
            },
            {
                question: "What technology does QClamp™ use?",
                answer:
                    "The tests use proprietary XNA technology to selectively amplify mutant DNA while suppressing wild-type DNA.",
            },
            {
                question: "What sample types are compatible?",
                answer:
                    "The tests support FFPE tissues, blood, and plasma samples for versatile applications.",
            },
            {
                question: "How sensitive are the tests?",
                answer:
                    "The QClamp™ assays can detect mutations at a 1% mutant allele frequency.",
            },
            {
                question: "Are the tests approved for clinical use?",
                answer: "Currently, the tests are intended for research use only.",
            },
        ],
        productLink: "https://www.diacarta.com/products/qclamp-gene-mutation-detection-tests",
    },
    {
        id: "fob-test",
        productTitle: "FOB Test",
        category: "oncology",
        subCategory: "Pan-Cancer",
        shortDescription:
            "A fecal occult blood test for detecting gastrointestinal bleeding.",
        productImage: "/assets/img/products/fob-test.png",
        productDetails: [
            {
                sectionTitle: "Overview",
                description:
                    "The FOB Test is a diagnostic tool used to detect occult blood in stool samples. It is widely used for colorectal cancer screening and detecting gastrointestinal bleeding.",
            },
            {
                sectionTitle: "Technology",
                description:
                    "The test uses guaiac-based or immunochemical methods to detect hemoglobin in stool samples, providing reliable results for early diagnosis.",
            },
            {
                sectionTitle: "Clinical Utility",
                description:
                    "The FOB Test is a critical tool in colorectal cancer screening programs, identifying patients who may require further diagnostic evaluation.",
            },
            {
                sectionTitle: "Key Features",
                description:
                    "The test is non-invasive, simple to use, and delivers rapid results, making it suitable for widespread screening programs.",
            },
        ],
        additionalData: [
            { key: "Test Type", value: "Fecal occult blood test" },
            { key: "Detection Method", value: "Guaiac-based or immunochemical" },
            { key: "Sample Type", value: "Stool samples" },
            { key: "Clinical Applications", value: "Colorectal cancer screening" },
            { key: "Turnaround Time", value: "10-15 minutes" },
            { key: "Regulatory Status", value: "FDA-approved" },
        ],
        faq: [
            {
                question: "What is the FOB Test used for?",
                answer:
                    "The FOB Test is used for colorectal cancer screening and detecting gastrointestinal bleeding.",
            },
            {
                question: "What sample is required for the test?",
                answer: "A stool sample is required for the FOB Test.",
            },
            {
                question: "What methods does the test use?",
                answer:
                    "The test can use guaiac-based or immunochemical methods for hemoglobin detection.",
            },
            {
                question: "Is the test approved for clinical use?",
                answer: "Yes, the FOB Test is FDA-approved for colorectal cancer screening.",
            },
            {
                question: "How quickly are results available?",
                answer: "Results are typically available within 10-15 minutes.",
            },
        ],
        productLink: "https://www.diacarta.com/products/fob",
    },
    {
        id: "hpv-cervical-cancer",
        productTitle: "HPV Cervical Cancer Test",
        category: "oncology",
        subCategory: "Cervical Cancer",
        shortDescription:
            "A high-precision diagnostic test for identifying high-risk HPV genotypes associated with cervical cancer.",
        productImage: "/assets/img/products/hpv-cervical-cancer.png",
        productDetails: [
            {
                sectionTitle: "Overview",
                description:
                    "The HPV Cervical Cancer Test detects high-risk HPV genotypes that are strongly associated with cervical cancer development. It provides a reliable method for early detection and screening.",
            },
            {
                sectionTitle: "Technology",
                description:
                    "The test employs advanced molecular techniques, such as real-time PCR, to identify high-risk HPV genotypes with high accuracy.",
            },
            {
                sectionTitle: "Clinical Utility",
                description:
                    "This test is essential for cervical cancer screening, enabling early detection of HPV infection and guiding clinical management decisions.",
            },
            {
                sectionTitle: "Key Features",
                description:
                    "Highly sensitive and specific, the test supports both screening and diagnostic purposes, ensuring comprehensive cervical cancer risk assessment.",
            },
        ],
        additionalData: [
            { key: "Test Type", value: "Real-time PCR-based HPV test" },
            { key: "Sample Type", value: "Cervical swabs" },
            { key: "Target Genotypes", value: "High-risk HPV genotypes (e.g., HPV-16, HPV-18)" },
            { key: "Clinical Applications", value: "Cervical cancer screening and diagnosis" },
            { key: "Turnaround Time", value: "1-2 days" },
            { key: "Regulatory Status", value: "FDA-approved" },
        ],
        faq: [
            {
                question: "What is the purpose of the HPV Cervical Cancer Test?",
                answer:
                    "The test identifies high-risk HPV genotypes associated with cervical cancer development, enabling early detection and intervention.",
            },
            {
                question: "What sample is required for the test?",
                answer: "The test requires a cervical swab sample.",
            },
            {
                question: "Is the test suitable for routine screening?",
                answer: "Yes, it is ideal for routine cervical cancer screening programs.",
            },
            {
                question: "How accurate is the test?",
                answer: "The test offers high sensitivity and specificity for HPV detection.",
            },
        ],
        productLink: "https://www.diacarta.com/products/hpv-cervical-cancer",
    },
    {
        id: "hpv-head-neck-cancer",
        productTitle: "HPV Head and Neck Cancer Test",
        category: "oncology",
        subCategory: "Head and Neck Cancer",
        shortDescription:
            "A diagnostic test for detecting HPV genotypes linked to head and neck cancers.",
        productImage: "/assets/img/products/hpv-head-neck-cancer.png",
        productDetails: [
            {
                sectionTitle: "Overview",
                description:
                    "The HPV Head and Neck Cancer Test detects high-risk HPV genotypes that are known to cause head and neck cancers, aiding in early diagnosis and treatment planning.",
            },
            {
                sectionTitle: "Technology",
                description:
                    "This test uses advanced real-time PCR techniques to accurately identify the presence of HPV DNA in tissue samples.",
            },
            {
                sectionTitle: "Clinical Utility",
                description:
                    "It is designed for the early detection and monitoring of head and neck cancers associated with HPV infection.",
            },
            {
                sectionTitle: "Key Features",
                description:
                    "The test is highly reliable, sensitive, and specific, ensuring accurate detection of HPV-related head and neck cancers.",
            },
        ],
        additionalData: [
            { key: "Test Type", value: "Real-time PCR-based HPV test" },
            { key: "Sample Type", value: "Tissue or biopsy samples" },
            { key: "Target Genotypes", value: "High-risk HPV genotypes (e.g., HPV-16)" },
            { key: "Clinical Applications", value: "Head and neck cancer diagnosis" },
            { key: "Turnaround Time", value: "1-2 days" },
            { key: "Regulatory Status", value: "For research use only" },
        ],
        faq: [
            {
                question: "What cancers can this test help detect?",
                answer: "The test detects head and neck cancers caused by high-risk HPV genotypes.",
            },
            {
                question: "What sample types are acceptable?",
                answer: "Tissue or biopsy samples are required for the test.",
            },
            {
                question: "Is this test FDA-approved?",
                answer: "Currently, the test is for research use only.",
            },
            {
                question: "What is the turnaround time?",
                answer: "Results are typically available within 1-2 days.",
            },
        ],
        productLink: "https://www.diacarta.com/products/hpv-head-neck-cancer",
    },
    {
        id: "cfdna-extraction",
        productTitle: "cfDNA Extraction Kit",
        category: "oncology",
        subCategory: "Liquid Biopsy Sample Prep",
        shortDescription:
            "A high-yield, high-purity kit for extracting cell-free DNA from plasma or serum.",
        productImage: "/assets/img/products/cfdna-extraction.png",
        productDetails: [
            {
                sectionTitle: "Overview",
                description:
                    "The cfDNA Extraction Kit is designed for efficient and high-purity extraction of cell-free DNA (cfDNA) from plasma or serum, supporting various downstream applications.",
            },
            {
                sectionTitle: "Technology",
                description:
                    "The kit employs a proprietary protocol to ensure high yields of intact cfDNA, suitable for sensitive applications like NGS and PCR.",
            },
            {
                sectionTitle: "Applications",
                description:
                    "It is ideal for liquid biopsy-based cancer diagnostics, prenatal screening, and other cfDNA-based applications.",
            },
            {
                sectionTitle: "Key Features",
                description:
                    "High yield and purity, user-friendly protocol, and compatibility with multiple sample types.",
            },
        ],
        additionalData: [
            { key: "Kit Type", value: "cfDNA extraction kit" },
            { key: "Sample Type", value: "Plasma or serum" },
            { key: "Yield", value: "High yield and purity of cfDNA" },
            { key: "Applications", value: "NGS, PCR, liquid biopsy, prenatal screening" },
            { key: "Compatibility", value: "Works with various downstream applications" },
        ],
        faq: [
            {
                question: "What is the purpose of the cfDNA Extraction Kit?",
                answer:
                    "The kit extracts cell-free DNA (cfDNA) from plasma or serum for various applications like NGS and PCR.",
            },
            {
                question: "What is the typical yield from a sample?",
                answer: "The kit provides a high yield of pure cfDNA from plasma or serum.",
            },
            {
                question: "What are the common applications of cfDNA?",
                answer: "Common uses include liquid biopsy, cancer diagnostics, and prenatal screening.",
            },
        ],
        productLink: "https://www.diacarta.com/products/cfdna-extraction",
    },
    {
        id: "sars-cov-2",
        productTitle: "SARS-CoV-2 Detection Kit",
        category: "Infectious Diseases",
        subCategory: "COVID-19",
        shortDescription:
            "A real-time PCR test for detecting SARS-CoV-2 in respiratory samples.",
        productImage: "/assets/img/products/sars-cov-2.png",
        productDetails: [
            {
                sectionTitle: "Overview",
                description:
                    "The SARS-CoV-2 Detection Kit provides rapid, accurate detection of the virus causing COVID-19, supporting effective disease management.",
            },
            {
                sectionTitle: "Technology",
                description:
                    "The test employs real-time PCR to identify viral RNA in respiratory samples with high sensitivity and specificity.",
            },
            {
                sectionTitle: "Clinical Utility",
                description:
                    "This test aids in the diagnosis of active SARS-CoV-2 infections, helping to control the spread of COVID-19.",
            },
        ],
        additionalData: [
            { key: "Test Type", value: "Real-time PCR test" },
            { key: "Sample Type", value: "Respiratory samples" },
            { key: "Target Virus", value: "SARS-CoV-2" },
            { key: "Turnaround Time", value: "1-2 hours" },
            { key: "Regulatory Status", value: "FDA Emergency Use Authorization (EUA)" },
        ],
        faq: [
            {
                question: "What does the test detect?",
                answer: "The test detects SARS-CoV-2 RNA in respiratory samples.",
            },
            {
                question: "Is this test FDA-approved?",
                answer: "The test has FDA Emergency Use Authorization (EUA).",
            },
        ],
        productLink: "https://www.diacarta.com/products/covid19/sars-cov-2",
    },
    {
        id: "covid19-multiplex",
        productTitle: "COVID-19 Multiplex Test",
        category: "Infectious Diseases",
        subCategory: "COVID-19",
        shortDescription:
            "A multiplex PCR test for detecting SARS-CoV-2 and distinguishing it from other respiratory infections.",
        productImage: "/assets/img/products/covid19-multiplex.png",
        productDetails: [
            {
                sectionTitle: "Overview",
                description:
                    "The COVID-19 Multiplex Test detects SARS-CoV-2 and differentiates it from other respiratory viruses, such as influenza, in a single test.",
            },
        ],
        additionalData: [
            { key: "Test Type", value: "Multiplex real-time PCR" },
            { key: "Sample Type", value: "Respiratory samples" },
        ],
        faq: [
            {
                question: "What does this test identify?",
                answer:
                    "The test identifies SARS-CoV-2 and other respiratory viruses like influenza.",
            },
        ],
        productLink: "https://www.diacarta.com/products/covid19/multiplex",
    },
    {
        id: "covid19-variants-detection-test",
        productTitle: "COVID-19 Variants Detection Test",
        category: "Infectious Diseases",
        subCategory: "COVID-19",
        shortDescription:
            "A cutting-edge test designed to identify and differentiate SARS-CoV-2 variants with high precision.",
        productImage: "/assets/img/products/covid19-variants-detection-test.png",
        productDetails: [
            {
                sectionTitle: "Overview",
                description:
                    "The COVID-19 Variants Detection Test is specifically developed to identify SARS-CoV-2 variants of concern, helping track mutations and assess their clinical significance. It is a vital tool in understanding viral evolution and managing outbreaks effectively.",
            },
            {
                sectionTitle: "Technology",
                description:
                    "Using advanced real-time PCR techniques, this test identifies unique genetic mutations associated with specific SARS-CoV-2 variants. It ensures accurate detection by targeting multiple mutation sites.",
            },
            {
                sectionTitle: "Clinical Utility",
                description:
                    "The test aids healthcare professionals and researchers in identifying circulating variants, assessing vaccine efficacy, and tailoring therapeutic strategies.",
            },
            {
                sectionTitle: "Key Features",
                description:
                    "This test provides rapid results, covers multiple variants of concern, and delivers high sensitivity and specificity to support critical decision-making in clinical and research settings.",
            },
        ],
        additionalData: [
            { key: "Test Type", value: "Variant-specific real-time PCR test" },
            { key: "Sample Type", value: "Nasopharyngeal swab, saliva" },
            { key: "Variants Detected", value: "Alpha, Delta, Omicron, and others" },
            { key: "Applications", value: "Clinical diagnostics, epidemiology, vaccine monitoring" },
            { key: "Turnaround Time", value: "2-3 hours" },
        ],
        faq: [
            {
                question: "What is the purpose of the COVID-19 Variants Detection Test?",
                answer:
                    "The test identifies SARS-CoV-2 variants to support effective outbreak management and treatment strategies.",
            },
            {
                question: "What samples are required for the test?",
                answer: "The test accepts nasopharyngeal swabs or saliva samples.",
            },
            {
                question: "How accurate is this test?",
                answer:
                    "The test offers high sensitivity and specificity for detecting and differentiating SARS-CoV-2 variants.",
            },
        ],
        productLink: "https://www.diacarta.com/products/covid19/varients-detection-test",
    },
    {
        id: "covid19-igg-test-kit",
        productTitle: "COVID-19 IgG Test Kit",
        category: "Infectious Diseases",
        subCategory: "COVID-19",
        shortDescription:
            "An antibody test designed to detect IgG antibodies against SARS-CoV-2, indicating previous infection or immune response post-vaccination.",
        productImage: "/assets/img/products/sars-cov-2.png",
        productDetails: [
            {
                sectionTitle: "Overview",
                description:
                    "The COVID-19 IgG Test Kit provides a reliable way to measure the presence of IgG antibodies against SARS-CoV-2 in blood samples. It plays a critical role in monitoring immune responses following infection or vaccination.",
            },
            {
                sectionTitle: "Technology",
                description:
                    "Using ELISA-based technology, this test detects and quantifies SARS-CoV-2-specific IgG antibodies with high accuracy and reproducibility.",
            },
            {
                sectionTitle: "Clinical Utility",
                description:
                    "This test is essential for assessing long-term immunity, monitoring population-level immune responses, and aiding in post-vaccination studies.",
            },
            {
                sectionTitle: "Key Features",
                description:
                    "Provides rapid results with easy-to-use protocols, delivering highly sensitive and specific detection of IgG antibodies.",
            },
        ],
        additionalData: [
            { key: "Test Type", value: "ELISA-based antibody test" },
            { key: "Sample Type", value: "Serum or plasma" },
            { key: "Target Antibody", value: "IgG specific to SARS-CoV-2" },
            { key: "Applications", value: "Immunity assessment, vaccine studies" },
            { key: "Turnaround Time", value: "2-3 hours" },
        ],
        faq: [
            {
                question: "What does the COVID-19 IgG Test Kit detect?",
                answer:
                    "The test detects IgG antibodies that indicate prior infection or an immune response to vaccination.",
            },
            {
                question: "What samples can be used for the test?",
                answer: "The test accepts serum or plasma samples.",
            },
            {
                question: "Can this test confirm active infection?",
                answer:
                    "No, the test detects past infection or immune response, not active infection.",
            },
        ],
        productLink: "https://www.diacarta.com/products/covid19/igg-test-kit",
    },
    {
        id: "covid19-antigen-home-test",
        productTitle: "COVID-19 Antigen Home Test",
        category: "Infectious Diseases",
        subCategory: "COVID-19",
        shortDescription:
            "A rapid antigen test for detecting SARS-CoV-2 infection at home with convenience and accuracy.",
        productImage: "/assets/img/products/covid19-antigen-home-test.png",
        productDetails: [
            {
                sectionTitle: "Overview",
                description:
                    "The COVID-19 Antigen Home Test provides a convenient way to detect active SARS-CoV-2 infection at home. Designed for easy self-administration, it delivers results in minutes.",
            },
            {
                sectionTitle: "Technology",
                description:
                    "The test uses lateral flow immunoassay technology to detect SARS-CoV-2 antigens in nasal swab samples.",
            },
            {
                sectionTitle: "Clinical Utility",
                description:
                    "Ideal for initial screening and quick confirmation of infection status, especially in high-transmission settings.",
            },
            {
                sectionTitle: "Key Features",
                description:
                    "Portable, fast, and user-friendly, the test ensures reliable results within 15 minutes.",
            },
        ],
        additionalData: [
            { key: "Test Type", value: "Rapid antigen lateral flow test" },
            { key: "Sample Type", value: "Nasal swab" },
            { key: "Applications", value: "At-home testing, workplace screening" },
            { key: "Result Time", value: "15 minutes" },
            { key: "Regulatory Status", value: "FDA Emergency Use Authorization (EUA)" },
        ],
        faq: [
            {
                question: "How accurate is the COVID-19 Antigen Home Test?",
                answer: "The test offers reliable accuracy for detecting active SARS-CoV-2 infections.",
            },
            {
                question: "How long does it take to get results?",
                answer: "The test delivers results within 15 minutes.",
            },
            {
                question: "Can I use this test for travel purposes?",
                answer:
                    "Check specific travel guidelines, as this test may not meet all requirements.",
            },
        ],
        productLink: "https://www.diacarta.com/products/covid19/antigen-home-test",
    },
    {
        id: "covid19-sars-cov-2-flu-ab",
        productTitle: "COVID-19 & Flu A/B Test",
        category: "Infectious Diseases",
        subCategory: "Respiratory",
        shortDescription:
            "A multiplex PCR test for detecting and differentiating SARS-CoV-2 and influenza viruses.",
        productImage: "/assets/img/products/covid19-sars-cov-2-flu-ab.png",
        productDetails: [
            {
                sectionTitle: "Overview",
                description:
                    "This multiplex PCR test simultaneously detects and differentiates SARS-CoV-2, Influenza A, and Influenza B, ensuring accurate diagnosis during respiratory virus seasons.",
            },
            {
                sectionTitle: "Technology",
                description:
                    "The test leverages multiplex real-time PCR to amplify and identify viral RNA from respiratory samples.",
            },
            {
                sectionTitle: "Clinical Utility",
                description:
                    "Designed to streamline diagnosis, the test aids clinicians in determining the causative agent of respiratory infections.",
            },
            {
                sectionTitle: "Key Features",
                description:
                    "Detects multiple viruses in one test, saving time and resources while delivering accurate results.",
            },
        ],
        additionalData: [
            { key: "Test Type", value: "Multiplex real-time PCR" },
            { key: "Sample Type", value: "Respiratory samples" },
            { key: "Applications", value: "Differential diagnosis of respiratory infections" },
            { key: "Result Time", value: "2-3 hours" },
            { key: "Regulatory Status", value: "FDA Emergency Use Authorization (EUA)" },
        ],
        faq: [
            {
                question: "What viruses does this test detect?",
                answer:
                    "The test detects SARS-CoV-2, Influenza A, and Influenza B from respiratory samples.",
            },
            {
                question: "How long does it take to get results?",
                answer: "The test provides results within 2-3 hours.",
            },
        ],
        productLink: "https://www.diacarta.com/products/covid19/sars-cov-2-flu-ab",
    },
    {
        id: "quantivirus-mpox-pcr",
        productTitle: "QuantiVirus Mpox PCR Test",
        category: "Infectious Diseases",
        subCategory: "Monkeypox",
        shortDescription:
            "A real-time PCR test for the detection of Mpox (Monkeypox) virus DNA in clinical samples.",
        productImage: "/assets/img/products/quantivirus-mpox-pcr.png",
        productDetails: [
            {
                sectionTitle: "Overview",
                description:
                    "The QuantiVirus Mpox PCR Test is designed to detect Mpox virus DNA with high accuracy, aiding in the identification and management of Mpox outbreaks.",
            },
            {
                sectionTitle: "Technology",
                description:
                    "Employing advanced real-time PCR technology, the test targets specific genetic sequences of the Mpox virus for precise detection.",
            },
            {
                sectionTitle: "Clinical Utility",
                description:
                    "The test assists healthcare professionals in the diagnosis and monitoring of Mpox infections, supporting effective outbreak control.",
            },
            {
                sectionTitle: "Key Features",
                description:
                    "Highly sensitive and specific, the test provides rapid results and is compatible with standard PCR equipment.",
            },
        ],
        additionalData: [
            { key: "Test Type", value: "Real-time PCR" },
            { key: "Sample Type", value: "Swabs, serum" },
            { key: "Applications", value: "Clinical diagnosis of Mpox infections" },
            { key: "Result Time", value: "2 hours" },
            { key: "Regulatory Status", value: "FDA Emergency Use Authorization (EUA)" },
        ],
        faq: [
            {
                question: "What does the QuantiVirus Mpox PCR Test detect?",
                answer:
                    "The test detects DNA from the Mpox (Monkeypox) virus in clinical samples.",
            },
            {
                question: "What samples are required for the test?",
                answer: "The test accepts swabs and serum samples.",
            },
            {
                question: "How is the test performed?",
                answer: "The test is conducted using standard real-time PCR equipment.",
            },
        ],
        productLink: "https://www.diacarta.com/products/quantivirus-mpox-pcr",
    },
    {
        id: "a1",
        productTitle: "A1 Blood Glucose Monitoring System",
        category: "OTC/POC Tests and Accessories",
        subCategory: "Immunoassays and Analyzers",
        shortDescription:
            "An innovative and user-friendly blood glucose monitoring device tailored for efficient diabetes management.",
        productImage: "/assets/img/products/a1.png",
        productDetails: [
            {
                sectionTitle: "Overview",
                description:
                    "The A1 Blood Glucose Monitoring System is an advanced device designed to provide accurate and real-time blood glucose readings. It empowers patients with diabetes to monitor their blood sugar levels effectively and take control of their health.",
            },
            {
                sectionTitle: "Technology",
                description:
                    "Using biosensor technology, the A1 system ensures precise glucose measurement from small blood samples. The device is equipped with a digital interface for ease of use and quick results.",
            },
            {
                sectionTitle: "Clinical Utility",
                description:
                    "Ideal for both clinical settings and home use, the A1 system helps patients and healthcare providers track blood glucose levels, facilitating timely interventions and better diabetes management.",
            },
            {
                sectionTitle: "Key Features",
                description:
                    "Compact and portable, the device offers fast results, minimal sample requirements, and user-friendly digital displays.",
            },
        ],
        additionalData: [
            { key: "Device Type", value: "Blood glucose monitoring device" },
            { key: "Sample Type", value: "Capillary blood" },
            { key: "Result Time", value: "5 seconds" },
            { key: "Applications", value: "Diabetes monitoring, clinical diagnostics" },
            { key: "Battery Life", value: "Up to 500 tests" },
        ],
        faq: [
            {
                question: "How does the A1 system work?",
                answer:
                    "The device uses biosensor technology to measure glucose levels from a small blood sample.",
            },
            {
                question: "Is the system portable?",
                answer:
                    "Yes, the compact design ensures portability for on-the-go blood glucose monitoring.",
            },
            {
                question: "What is the sample size required?",
                answer: "The device requires only a minimal blood sample for accurate readings.",
            },
        ],
        productLink: "https://www.diacarta.com/products/a1",
    },
    {
        id: "palm-f",
        productTitle: "Palm-F Handheld Analyzer",
        category: "OTC/POC Tests and Accessories",
        subCategory: "Immunoassays and Analyzers",
        shortDescription:
            "A portable and efficient handheld analyzer for quick diagnostic testing in diverse clinical settings.",
        productImage: "/assets/img/products/palm-f.png",
        productDetails: [
            {
                sectionTitle: "Overview",
                description:
                    "The Palm-F Handheld Analyzer is a cutting-edge portable device designed for rapid diagnostic testing. Its compact size and versatility make it suitable for use in clinics, laboratories, and field settings.",
            },
            {
                sectionTitle: "Technology",
                description:
                    "Powered by advanced microfluidics and biosensor technologies, the Palm-F analyzer ensures precise measurements and high reproducibility across a range of tests.",
            },
            {
                sectionTitle: "Clinical Utility",
                description:
                    "The device supports a variety of diagnostic tests, from blood chemistry to infectious disease markers, delivering reliable results in minutes.",
            },
            {
                sectionTitle: "Key Features",
                description:
                    "The Palm-F analyzer is lightweight, easy to use, and delivers rapid results with high accuracy, enhancing diagnostic workflows in resource-limited settings.",
            },
        ],
        additionalData: [
            { key: "Device Type", value: "Handheld diagnostic analyzer" },
            { key: "Tests Supported", value: "Blood chemistry, infectious diseases, biomarkers" },
            { key: "Sample Type", value: "Blood, serum, plasma" },
            { key: "Battery Life", value: "8 hours continuous use" },
            { key: "Result Time", value: "1-5 minutes depending on the test" },
        ],
        faq: [
            {
                question: "What tests can be performed using the Palm-F analyzer?",
                answer:
                    "The device supports blood chemistry, infectious disease markers, and other diagnostic tests.",
            },
            {
                question: "Is the analyzer portable?",
                answer:
                    "Yes, the Palm-F is lightweight and compact, ideal for field and clinical use.",
            },
            {
                question: "How quickly does the device provide results?",
                answer: "Results are available within 1-5 minutes, depending on the test.",
            },
        ],
        productLink: "https://www.diacarta.com/products/palm-f",
    },
    {
        id: "luminometer",
        productTitle: "Luminometer Diagnostic Device",
        category: "OTC/POC Tests and Accessories",
        subCategory: "Diagnostic Devices",
        shortDescription:
            "An advanced luminometer for detecting bioluminescent and chemiluminescent signals in diagnostic assays.",
        productImage: "/assets/img/products/luminometer.png",
        productDetails: [
            {
                sectionTitle: "Overview",
                description:
                    "The Luminometer Diagnostic Device is a specialized tool used in clinical and research settings for detecting luminescent signals in assays. Its sensitivity and precision make it an essential component for advanced diagnostics.",
            },
            {
                sectionTitle: "Technology",
                description:
                    "Utilizing state-of-the-art photodetection technology, the luminometer detects and quantifies light emissions from bioluminescent and chemiluminescent reactions.",
            },
            {
                sectionTitle: "Clinical Utility",
                description:
                    "The device is widely used in diagnostic laboratories for detecting enzymatic reactions, microbial contamination, and other luminescent-based tests.",
            },
            {
                sectionTitle: "Key Features",
                description:
                    "Highly sensitive detection, robust design, and easy integration into laboratory workflows make this device a preferred choice for diagnostic applications.",
            },
        ],
        additionalData: [
            { key: "Device Type", value: "Luminescence detection device" },
            { key: "Applications", value: "Microbial detection, enzymatic assays, contamination testing" },
            { key: "Sensitivity", value: "High sensitivity for low-light emissions" },
            { key: "Result Time", value: "Varies by assay type" },
            { key: "Power Supply", value: "AC-powered" },
        ],
        faq: [
            {
                question: "What is a luminometer used for?",
                answer:
                    "A luminometer detects light emissions from bioluminescent and chemiluminescent reactions in diagnostic tests.",
            },
            {
                question: "Can the device be integrated into lab workflows?",
                answer:
                    "Yes, the luminometer is designed for seamless integration into standard laboratory workflows.",
            },
        ],
        productLink: "https://www.diacarta.com/products/luminometer",
    },
    {
        id: "incubator",
        productTitle: "Laboratory Incubator",
        category: "OTC/POC Tests and Accessories",
        subCategory: "Diagnostic Devices",
        shortDescription:
            "A versatile laboratory incubator designed for precise temperature and humidity control in microbial and cell culture applications.",
        productImage: "/assets/img/products/incubator.png",
        productDetails: [
            {
                sectionTitle: "Overview",
                description:
                    "The Laboratory Incubator provides an optimal environment for growing and maintaining microbial and cell cultures. Its precise control systems ensure consistent results across a wide range of applications.",
            },
            {
                sectionTitle: "Technology",
                description:
                    "Equipped with digital temperature and humidity control, the incubator ensures stable conditions, essential for sensitive biological experiments.",
            },
            {
                sectionTitle: "Clinical Utility",
                description:
                    "Widely used in microbiology, cell culture, and pharmaceutical research, the incubator supports growth and experimentation under controlled conditions.",
            },
            {
                sectionTitle: "Key Features",
                description:
                    "Precise temperature control, humidity regulation, and energy-efficient operation make this incubator an indispensable tool for modern laboratories.",
            },
        ],
        additionalData: [
            { key: "Device Type", value: "Laboratory incubator" },
            { key: "Temperature Range", value: "Ambient to 60°C" },
            { key: "Humidity Control", value: "Adjustable" },
            { key: "Applications", value: "Microbiology, cell culture, research" },
            { key: "Power Supply", value: "AC-powered" },
        ],
        faq: [
            {
                question: "What is a laboratory incubator used for?",
                answer:
                    "It is used to provide a controlled environment for microbial growth and cell culture experiments.",
            },
            {
                question: "What temperature range does the incubator support?",
                answer: "The device supports a temperature range from ambient to 60°C.",
            },
        ],
        productLink: "https://www.diacarta.com/products/incubator",
    },
    {
        id: "icolon-ifob-test-rx",
        productTitle: "iColoN iFOB Test Rx",
        category: "OTC/POC Tests and Accessories",
        subCategory: "OTC/POC Tests",
        shortDescription:
            "A highly sensitive and non-invasive fecal immunochemical test (FIT) designed for the detection of hidden blood in stool, aiding in colorectal cancer screening and gastrointestinal health monitoring.",
        productImage: "/assets/img/products/icolon-ifob-test-rx.png",
        productDetails: [
            {
                sectionTitle: "Overview",
                description:
                    "The iColoN iFOB Test Rx is an advanced fecal immunochemical test (FIT) that detects occult blood in stool samples. This non-invasive diagnostic tool is instrumental in colorectal cancer screening programs and provides valuable insights into gastrointestinal health. Its high sensitivity ensures early detection, improving patient outcomes and enabling timely interventions.",
            },
            {
                sectionTitle: "Technology",
                description:
                    "Utilizing advanced immunoassay technology, the iColoN iFOB Test Rx specifically detects hemoglobin in stool samples. This ensures high specificity and sensitivity, reducing false-positive results and offering reliable diagnostic outcomes in clinical and at-home settings.",
            },
            {
                sectionTitle: "Clinical Utility",
                description:
                    "This test is widely used in routine colorectal cancer screening, diagnosing gastrointestinal disorders, and monitoring patients with increased risk of colorectal malignancies. It is particularly suitable for asymptomatic individuals in early detection programs.",
            },
            {
                sectionTitle: "Key Features",
                description:
                    "The iColoN iFOB Test Rx features easy sample collection, quick turnaround times, and user-friendly procedures, making it ideal for both clinical laboratories and at-home testing. It provides actionable results that aid in the early diagnosis and management of colorectal cancer and other gastrointestinal conditions.",
            },
        ],
        additionalData: [
            { key: "Test Type", value: "Fecal Immunochemical Test (FIT)" },
            { key: "Sample Type", value: "Stool" },
            { key: "Applications", value: "Colorectal cancer screening, GI health monitoring" },
            { key: "Sensitivity", value: "High for hemoglobin detection" },
            { key: "Result Time", value: "15 minutes" },
            { key: "Test Format", value: "Single-use, disposable test kit" },
            { key: "Usage", value: "At-home or clinical laboratories" },
        ],
        faq: [
            {
                question: "What is the purpose of the iColoN iFOB Test Rx?",
                answer:
                    "The iColoN iFOB Test Rx is designed to detect hidden blood in stool samples, facilitating early detection of colorectal cancer and gastrointestinal disorders.",
            },
            {
                question: "How does the iColoN iFOB Test Rx work?",
                answer:
                    "The test uses immunoassay technology to detect hemoglobin in stool samples. A simple at-home collection kit enables patients to provide samples that are analyzed for the presence of occult blood.",
            },
            {
                question: "Who should use this test?",
                answer:
                    "The test is recommended for individuals undergoing routine colorectal cancer screening, those with gastrointestinal symptoms, or individuals at increased risk for colorectal malignancies.",
            },
            {
                question: "Is the test invasive?",
                answer:
                    "No, the iColoN iFOB Test Rx is non-invasive and requires only a stool sample for analysis.",
            },
            {
                question: "How long does it take to get results?",
                answer: "Results are available within 15 minutes after sample analysis.",
            },
        ],
        productLink: "https://www.diacarta.com/products/icolon-ifob-test-rx",
    }
];

export default products_data;