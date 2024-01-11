export const  BundlesModel = 
{
    "resourceType": "Bundle",
    "id": "EjemploBundleInicio1",
    "meta": {
        "lastUpdated": "2023-12-12T14:12:10Z",
        "profile": [
            "https://interoperabilidad.minsal.cl/fhir/ig/tei/StructureDefinition/BundleInicioLE"
        ]
    },
    "type": "message",
    "timestamp": "2023-12-12T14:12:10Z",
    "entry": [
        {
            "fullUrl": "http://acme.com/ehr/fhir/MessageHeader/mh1",
            "resource": {
                "resourceType": "MessageHeader",
                "id": "EjemploMessageHeader1",
                "meta": {
                    "lastUpdated": "2023-01-20T14:12:10Z",
                    "profile": [
                        "https://interoperabilidad.minsal.cl/fhir/ig/tei/StructureDefinition/MessageHeaderLE"
                    ]
                },
                "text": {
                    "status": "generated",
                    "div": "<div xmlns=\"http://www.w3.org/1999/xhtml\"><p><b>Generated Narrative: MessageHeader</b><a name=\"EjemploMessageHeader\"> </a></p><div style=\"display: inline-block; background-color: #d9e0e7; padding: 6px; margin: 4px; border: 1px solid #8da1b4; border-radius: 5px; line-height: 60%\"><p style=\"margin-bottom: 0px\">Resource MessageHeader &quot;EjemploMessageHeader&quot; Updated &quot;2023-01-20 14:12:10+0000&quot; </p><p style=\"margin-bottom: 0px\">Profile: <a href=\"StructureDefinition-MessageHeaderLE.html\">MessageHeader LE</a></p></div><p><b>event</b>: Iniciar (Details: https://interoperabilidad.minsal.cl/fhir/ig/tei/CodeSystem/CSTipoEventoLE code iniciar = 'Iniciar', stated as 'null')</p><p><b>author</b>: <a href=\"Bundle-EjemploBundleInicio.html#http-//acme.com/ehr/fhir/PractitionerRole/praR1\">http://acme.com/ehr/fhir/PractitionerRole/praR1</a></p><h3>Sources</h3><table class=\"grid\"><tr><td style=\"display: none\">-</td><td><b>Software</b></td><td><b>Endpoint</b></td></tr><tr><td style=\"display: none\">*</td><td>SolucionInformatica</td><td><a href=\"http://link-to-sending.cl\">http://link-to-sending.cl</a></td></tr></table><p><b>focus</b>: <a href=\"Bundle-EjemploBundleInicio.html#http-//acme.com/ehr/fhir/ServiceRequest/serv1\">http://acme.com/ehr/fhir/ServiceRequest/serv1</a></p></div>"
                },
                "eventCoding": {
                    "system": "https://interoperabilidad.minsal.cl/fhir/ig/tei/CodeSystem/CSTipoEventoLE",
                    "code": "iniciar",
                    "display": "Iniciar"
                },
                "author": {
                    "reference": "http://acme.com/ehr/fhir/PractitionerRole/praR1"
                },
                "source": {
                    "software": "Software San Juan Dios (SSJD)",
                    "endpoint": "http://link-to-sending.cl"
                },
                "focus": [
                    {
                        "reference": "http://acme.com/ehr/fhir/ServiceRequest/EjemploServiceRequest1"
                    }
                ]
            }
        },
        {
            "fullUrl": "http://acme.com/ehr/fhir/ServiceRequest/serv1",
            "resource": {
                "resourceType": "ServiceRequest",
                "id": "EjemploServiceRequest1",
                "meta": {
                    "profile": [
                        "https://interoperabilidad.minsal.cl/fhir/ig/tei/StructureDefinition/ServiceRequestLE"
                    ]
                },
                "text": {
                    "status": "extensions",
                    "div": "<div xmlns=\"http://www.w3.org/1999/xhtml\"><p><b>Generated Narrative: ServiceRequest</b><a name=\"EjemploServiceRequest\"> </a></p><div style=\"display: inline-block; background-color: #d9e0e7; padding: 6px; margin: 4px; border: 1px solid #8da1b4; border-radius: 5px; line-height: 60%\"><p style=\"margin-bottom: 0px\">Resource ServiceRequest &quot;EjemploServiceRequest&quot; </p><p style=\"margin-bottom: 0px\">Profile: <a href=\"StructureDefinition-ServiceRequestLE.html\">ServiceRequest LE</a></p></div><p><b>ExtStringFundamentoPriorizacion</b>: FundamentoPriorizacion</p><p><b>SospechaPatologiaGes</b>: true</p><p><b>ExtBool ResolutividadAPS</b>: true</p><p><b>ExtBool Alergia</b>: false</p><p><b>Origen Interconsulta</b>: APS <span style=\"background: LightGoldenRodYellow; margin: 4px; border: 1px solid khaki\"> (<a href=\"CodeSystem-CSinterconsulta.html\">Interconsulta</a>#1)</span></p><p><b>Estado Interconsulta Codigo</b>: A la espera de referencia <span style=\"background: LightGoldenRodYellow; margin: 4px; border: 1px solid khaki\"> (<a href=\"CodeSystem-CSEstadoInterconsulta.html\">Estado Interconsulta</a>#1)</span></p><p><b>status</b>: draft</p><p><b>intent</b>: proposal</p><p><b>priority</b>: urgent</p><p><b>subject</b>: <a href=\"Bundle-EjemploBundleAtender.html#http-//acme.com/ehr/fhir/Patient/EjemploPatient\">http://acme.com/ehr/fhir/Patient/EjemploPatient</a></p><p><b>encounter</b>: <a href=\"Bundle-EjemploBundleInicio.html#http-//acme.com/ehr/fhir/Encounter/enc1\">http://acme.com/ehr/fhir/Encounter/enc1</a></p><p><b>authoredOn</b>: 2022-01-20 13:50:20+0000</p><p><b>reasonCode</b>: Confirmación <span style=\"background: LightGoldenRodYellow; margin: 4px; border: 1px solid khaki\"> (<a href=\"CodeSystem-CSDerivadoParaCodigo.html\">Derivado Para</a>#1)</span></p><p><b>reasonReference</b>: <a href=\"Bundle-EjemploBundleInicio.html#http-//acme.com/ehr/fhir/Observation/obs1\">http://acme.com/ehr/fhir/Observation/obs1</a></p><p><b>supportingInfo</b>: </p><ul><li><a href=\"Bundle-EjemploBundleInicio.html#http-//acme.com/ehr/fhir/AllergyIntolerance/all1\">http://acme.com/ehr/fhir/AllergyIntolerance/all1</a></li><li><a href=\"Bundle-EjemploBundleInicio.html#http-//acme.com/ehr/fhir/Condition/con1\">http://acme.com/ehr/fhir/Condition/con1</a></li><li><a href=\"Bundle-EjemploBundleInicio.html#http-//acme.com/ehr/fhir/Observvation/obs2\">http://acme.com/ehr/fhir/Observvation/obs2</a></li><li><a href=\"Bundle-EjemploBundleInicio.html#http-//acme.com/ehr/fhir/Condition/con3\">http://acme.com/ehr/fhir/Condition/con3</a></li><li><a href=\"Bundle-EjemploBundleInicio.html#http-//acme.com/ehr/fhir/Observation/obs3\">http://acme.com/ehr/fhir/Observation/obs3</a></li><li><a href=\"Bundle-EjemploBundleInicio.html#http-//acme.com/ehr/fhir/DocumentReference/doc1\">http://acme.com/ehr/fhir/DocumentReference/doc1</a></li><li><a href=\"Bundle-EjemploBundleInicio.html#http-//acme.com/ehr/fhir/Coverage/cov1\">http://acme.com/ehr/fhir/Coverage/cov1</a></li><li><a href=\"Bundle-EjemploBundleInicio.html#http-//acme.com/ehr/fhir/QuestionnaireResponse/que1\">http://acme.com/ehr/fhir/QuestionnaireResponse/que1</a></li></ul></div>"
                },
                "extension": [
                    {
                        "url": "https://interoperabilidad.minsal.cl/fhir/ig/tei/StructureDefinition/ExtStringFundamentoPriorizacion",
                        "valueString": "Se requiere pronta confirmación para iniciar tratamiento"
                    },
                    {
                        "url": "https://interoperabilidad.minsal.cl/fhir/ig/tei/StructureDefinition/SospechaPatologiaGes",
                        "valueBoolean": false
                    },
                    {
                        "url": "https://interoperabilidad.minsal.cl/fhir/ig/tei/StructureDefinition/ExtBoolAlergia",
                        "valueBoolean": false
                    },
                    {
                        "url": "https://interoperabilidad.minsal.cl/fhir/ig/tei/StructureDefinition/OrigenInterconsulta",
                        "valueCodeableConcept": {
                            "coding": [
                                {
                                    "system": "https://interoperabilidad.minsal.cl/fhir/ig/tei/CodeSystem/CSinterconsulta",
                                    "code": "1"
                                }
                            ]
                        }
                    },
                    {
                        "url": "https://interoperabilidad.minsal.cl/fhir/ig/tei/StructureDefinition/EstadoInterconsultaCodigoLE",
                        "valueCodeableConcept": {
                            "coding": [
                                {
                                    "system": "https://interoperabilidad.minsal.cl/fhir/ig/tei/CodeSystem/CSEstadoInterconsulta",
                                    "code": "1"
                                }
                            ]
                        }
                    },
                    {
                        "url": "https://interoperabilidad.minsal.cl/fhir/ig/tei/StructureDefinition/EspecialidadMedicaDestinoCodigo",
                        "valueCodeableConcept": {
                            "coding": [
                                {
                                    "system": "https://interoperabilidad.minsal.cl/fhir/ig/tei/CodeSystem/CSEspecialidadMed",
                                    "code": "3",
                                    "display": "CARDIOLOGÍA"
                                }
                            ]
                        }
                    }
                ],
                "status": "draft",
                "intent": "proposal",
                "priority": "routine",
                "subject": {
                    "reference": "http://acme.com/ehr/fhir/Patient/EjemploPatient1"
                },
                "encounter": {
                    "reference": "http://acme.com/ehr/fhir/Encounter/EjemploEncounter1"
                },
                "authoredOn": "2023-10-25T09:10:00Z",
                "reasonCode": [
                    {
                        "coding": [
                            {
                                "system": "https://interoperabilidad.minsal.cl/fhir/ig/tei/CodeSystem/CSDerivadoParaCodigo",
                                "code": "1"
                            }
                        ]
                    }
                ]
            }
        },
        {
            "fullUrl": "http://acme.com/ehr/fhir/Encounter/enc1",
            "resource": {
                "resourceType": "Encounter",
                "id": "EjemploEncounter1",
                "meta": {
                    "profile": [
                        "https://interoperabilidad.minsal.cl/fhir/ig/tei/StructureDefinition/EncounterInicioLE"
                    ]
                },
                "text": {
                    "status": "generated",
                    "div": "<div xmlns=\"http://www.w3.org/1999/xhtml\"><p><b>Generated Narrative: Encounter</b><a name=\"EjemploEncounter\"> </a></p><div style=\"display: inline-block; background-color: #d9e0e7; padding: 6px; margin: 4px; border: 1px solid #8da1b4; border-radius: 5px; line-height: 60%\"><p style=\"margin-bottom: 0px\">Resource Encounter &quot;EjemploEncounter&quot; </p><p style=\"margin-bottom: 0px\">Profile: <a href=\"StructureDefinition-EncounterInicioLE.html\">Encounter Inicio LE</a></p></div><p><b>identifier</b>: Filler Identifier: 1</p><p><b>status</b>: finished</p><p><b>class</b>: Presencial (Details: https://interoperabilidad.minsal.cl/fhir/ig/tei/CodeSystem/CSModalidadAtencionCodigo code 1 = 'Presencial', stated as 'null')</p><p><b>subject</b>: <a href=\"Bundle-EjemploBundleAtender.html#http-//acme.com/ehr/fhir/Patient/EjemploPatient\">http://acme.com/ehr/fhir/Patient/EjemploPatient</a></p><p><b>period</b>: 2023-01-22 09:00:00+0000 --&gt; 2023-01-22 09:00:00+0000</p></div>"
                },
                "identifier": [
                    {
                        "type": {
                            "coding": [
                                {
                                    "system": "http://terminology.hl7.org/CodeSystem/v2-0203",
                                    "display": "Fill",
                                    "code": "FILL"
                                }
                            ]
                        },
                        "value": "1"
                    }
                ],
                "status": "finished",
                "class": {
                    "system": "https://interoperabilidad.minsal.cl/fhir/ig/tei/CodeSystem/CSModalidadAtencionCodigo",
                    "display": "Presencial",
                    "code": "1"
                },
                "subject": {
                    "reference": "http://acme.com/ehr/fhir/Patient/EjemploPatient"
                },
                "period": {
                    "start": "2023-10-25T09:00:00Z",
                    "end": "2023-10-25T09:20:00Z"
                }
            }
        },
        {
            "fullUrl": "http://acme.com/ehr/fhir/Patient/EjemploPatient",
            "resource": {
                "resourceType": "Patient",
                "id": "EjemploPatient1",
                "meta": {
                    "profile": [
                        "https://interoperabilidad.minsal.cl/fhir/ig/tei/StructureDefinition/PacienteMinsalMPI"
                    ]
                },
                "text": {
                    "status": "generated",
                    "div": "<div xmlns=\"http://www.w3.org/1999/xhtml\"><p style=\"border: 1px #661aff solid; background-color: #e6e6ff; padding: 10px;\"><b>Luisa </b> male, DoB: 1995-12-12 ( Run: 15999999)</p><hr/><table class=\"grid\"><tr><td style=\"background-color: #f3f5da\" title=\"Known status of Patient\">Deceased:</td><td>false</td><td style=\"background-color: #f3f5da\" title=\"Known Marital status of Patient\">Marital Status:</td><td colspan=\"3\"><span title=\"Codes: {https://interoperabilidad.minsal.cl/fhir/ig/tei/CodeSystem/CSEstadoCivil 01}\">Soltero(a)</span></td></tr><tr><td style=\"background-color: #f3f5da\" title=\"Alternate names (see the one above)\">Alt. Name:</td><td colspan=\"3\">Luis Perez (OFFICIAL)</td></tr><tr><td style=\"background-color: #f3f5da\" title=\"Ways to contact the Patient\">Contact Details:</td><td colspan=\"3\"><ul><li>ph: 569854875457(MOBILE)</li><li>El boldo 4 #97 (HOME)</li></ul></td></tr><tr><td style=\"background-color: #f3f5da\" title=\"Religión\"><a href=\"StructureDefinition-Religion.html\">Religión:</a></td><td colspan=\"3\"><ul><li><span title=\"Codes: {https://interoperabilidad.minsal.cl/fhir/ig/tei/CodeSystem/CSReligion 1}\">Católica</span></li></ul></td></tr><tr><td style=\"background-color: #f3f5da\" title=\"Esta extensión incluye códigos de paises de origen\"><a href=\"https://hl7chile.cl/fhir/ig/clcore/1.8.4/StructureDefinition-CodigoPaises.html\">Codigo de Identificación de países:</a></td><td colspan=\"3\"><ul><li><span title=\"Codes: {urn:iso:std:iso:3166 158}\">Taiwan, Province of China</span></li></ul></td></tr><tr><td style=\"background-color: #f3f5da\" title=\"The registered place of birth of the patient. A sytem may use the address.text if they don't store the birthPlace address in discrete elements.\"><a href=\"http://hl7.org/fhir/R4/extension-patient-birthplace.html\">Birth Place:</a></td><td colspan=\"3\"><ul><li>Curicó</li></ul></td></tr><tr><td style=\"background-color: #f3f5da\" title=\"PueblosOriginariosPerteneciente\"><a href=\"StructureDefinition-PueblosOriginariosPerteneciente.html\">PueblosOriginariosPerteneciente:</a></td><td colspan=\"3\"><ul><li>true</li></ul></td></tr><tr><td style=\"background-color: #f3f5da\" title=\"Almacenar si el paciente pertenece a algun pueblo originario\"><a href=\"StructureDefinition-PueblosOriginarios.html\">Pueblos Originarios:</a></td><td colspan=\"3\"><ul><li><span title=\"Codes: {https://interoperabilidad.minsal.cl/fhir/ig/tei/CodeSystem/PueblosOriginariosCS 01}\">Mapuche</span></li></ul></td></tr><tr><td style=\"background-color: #f3f5da\" title=\"Sexo Biologico del paciente\"><a href=\"StructureDefinition-SexoBiologico.html\">Sexo Biologico del paciente:</a></td><td colspan=\"3\"><ul><li><span title=\"Codes: {http://hl7.org/fhir/administrative-gender male}\">Male</span></li></ul></td></tr><tr><td style=\"background-color: #f3f5da\" title=\"PueblosAfrodescendiente\"><a href=\"StructureDefinition-PueblosAfrodescendiente.html\">PueblosAfrodescendiente:</a></td><td colspan=\"3\"><ul><li>true</li></ul></td></tr><tr><td style=\"background-color: #f3f5da\" title=\"País de origen del paciente\"><a href=\"StructureDefinition-PaisOrigenMPI.html\">País de origen del paciente:</a></td><td colspan=\"3\"><ul><li><span title=\"Codes: {urn:iso:std:iso:3166 158}\">Taiwan, Province of China</span></li></ul></td></tr><tr><td style=\"background-color: #f3f5da\" title=\"Identidad De Genero\"><a href=\"StructureDefinition-IdentidadDeGenero.html\">Identidad De Genero:</a></td><td colspan=\"3\"><ul><li><span title=\"Codes: {https://interoperabilidad.minsal.cl/fhir/ig/tei/CodeSystem/CSIdentidaddeGenero 1}\">Masculino</span></li></ul></td></tr></table></div>"
                },
                "extension": [
                    {
                        "url": "https://hl7chile.cl/fhir/ig/clcore/StructureDefinition/CodigoPaises",
                        "valueCodeableConcept": {
                            "coding": [
                                {
                                    "system": "https://hl7chile.cl/fhir/ig/clcore/CodeSystem/CodPais",
                                    "code": "152"
                                }
                            ]
                        }
                    },
                    {
                        "url": "https://interoperabilidad.minsal.cl/fhir/ig/tei/StructureDefinition/PaisOrigenMPI",
                        "valueCodeableConcept": {
                            "coding": [
                                {
                                    "system": "https://hl7chile.cl/fhir/ig/clcore/CodeSystem/CodPais",
                                    "code": "152"
                                }
                            ]
                        }
                    },
                    {
                        "url": "https://interoperabilidad.minsal.cl/fhir/ig/tei/StructureDefinition/SexoBiologico",
                        "valueCodeableConcept": {
                            "coding": [
                                {
                                    "system": "http://hl7.org/fhir/administrative-gender",
                                    "code": "male"
                                }
                            ]
                        }
                    },
                    {
                        "url": "http://hl7.org/fhir/StructureDefinition/patient-birthPlace",
                        "valueAddress": {
                            "text": "Linares"
                        }
                    },
                    {
                        "url": "https://interoperabilidad.minsal.cl/fhir/ig/tei/StructureDefinition/PueblosOriginariosPerteneciente",
                        "valueBoolean": false
                    }
                ],
                "identifier": [
                    {
                        "type": {
                            "extension": [
                                {
                                    "url": "https://hl7chile.cl/fhir/ig/clcore/StructureDefinition/CodigoPaises",
                                    "valueCodeableConcept": {
                                        "coding": [
                                            {
                                                "system": "https://hl7chile.cl/fhir/ig/clcore/CodeSystem/CodPais",
                                                "code": "152"
                                            }
                                        ]
                                    }
                                }
                            ],
                            "coding": [
                                {
                                    "system": "https://hl7chile.cl/fhir/ig/clcore/CodeSystem/CSTipoIdentificador",
                                    "code": "01"
                                }
                            ]
                        },
                        "system": "http://www.acme.com/identifiers/patient",
                        "value": "9848328-4"
                    }
                ],
                "name": [
                    {
                        "use": "official",
                        "family": "Díaz",
                        "_family": {
                            "extension": [
                                {
                                    "url": "https://hl7chile.cl/fhir/ig/clcore/StructureDefinition/SegundoApellido",
                                    "valueString": "Cortéz"
                                }
                            ]
                        },
                        "given": [
                            "Anibal"
                        ]
                    },
                    {
                        "use": "usual",
                        "given": [
                            "Anibal"
                        ]
                    }
                ],
                "telecom": [
                    {
                        "system": "phone",
                        "value": "999888777",
                        "use": "mobile",
                        "rank": 1
                    }
                ],
                "gender": "male",
                "birthDate": "1955-10-20",
                "deceasedBoolean": false
            }
        },
        {
            "fullUrl": "http://acme.com/ehr/fhir/Condition/con1",
            "resource": {
                "resourceType": "Condition",
                "id": "EjemploCondition1",
                "meta": {
                    "profile": [
                        "https://interoperabilidad.minsal.cl/fhir/ig/tei/StructureDefinition/ConditionInicioDiagnosticoLE"
                    ]
                },
                "text": {
                    "status": "generated",
                    "div": "<div xmlns=\"http://www.w3.org/1999/xhtml\"><p><b>Generated Narrative: Condition</b><a name=\"EjemploCondition\"> </a></p><div style=\"display: inline-block; background-color: #d9e0e7; padding: 6px; margin: 4px; border: 1px solid #8da1b4; border-radius: 5px; line-height: 60%\"><p style=\"margin-bottom: 0px\">Resource Condition &quot;EjemploCondition&quot; </p><p style=\"margin-bottom: 0px\">Profile: <a href=\"StructureDefinition-ConditionInicioDiagnosticoLE.html\">Condition Inicio Diagnostico LE</a></p></div><p><b>clinicalStatus</b>: Active <span style=\"background: LightGoldenRodYellow; margin: 4px; border: 1px solid khaki\"> (<a href=\"http://terminology.hl7.org/5.0.0/CodeSystem-condition-clinical.html\">Condition Clinical Status Codes</a>#active)</span></p><p><b>verificationStatus</b>: Confirmed <span style=\"background: LightGoldenRodYellow; margin: 4px; border: 1px solid khaki\"> (<a href=\"http://terminology.hl7.org/5.3.0/CodeSystem-condition-ver-status.html\">ConditionVerificationStatus</a>#confirmed)</span></p><p><b>category</b>: diagnostico <span style=\"background: LightGoldenRodYellow; margin: 4px; border: 1px solid khaki\"> (<a href=\"http://terminology.hl7.org/5.0.0/CodeSystem-condition-category.html\">Condition Category Codes</a>#encounter-diagnosis)</span></p><p><b>severity</b>: 6736007 <span style=\"background: LightGoldenRodYellow; margin: 4px; border: 1px solid khaki\"> (<a href=\"https://browser.ihtsdotools.org/\">SNOMED CT</a>#6736007)</span></p><p><b>code</b>: DiagnosticoTextoLibreSospecha <span style=\"background: LightGoldenRodYellow; margin: 4px; border: 1px solid khaki\"> (uno#1 &quot;Diagnostico1&quot;)</span></p><p><b>subject</b>: <a href=\"Bundle-EjemploBundleAtender.html#http-//acme.com/ehr/fhir/Patient/EjemploPatient\">http://acme.com/ehr/fhir/Patient/EjemploPatient</a></p></div>"
                },
                "clinicalStatus": {
                    "coding": [
                        {
                            "system": "http://terminology.hl7.org/CodeSystem/condition-clinical",
                            "code": "active"
                        }
                    ]
                },
                "verificationStatus": {
                    "coding": [
                        {
                            "system": "http://terminology.hl7.org/CodeSystem/condition-ver-status",
                            "code": "no confirmado"
                        }
                    ]
                },
                "category": [
                    {
                        "coding": [
                            {
                                "system": "http://terminology.hl7.org/CodeSystem/condition-category",
                                "code": "encounter-diagnosis"
                            }
                        ],
                        "text": "diagnostico"
                    }
                ],
                "severity": {
                    "coding": [
                        {
                            "system": "http://snomed.info/sct",
                            "code": "6736007"
                        }
                    ]
                },
                "code": {
                    "coding": [
                        {
                            "system": "http://snomed.info/sct",
                            "code": "364006",
                            "display": "Insuficiencia cardíaca aguda del lado izquierdo"
                        }
                    ],
                    "text": "Sospecha de insuficiencia cardíaca"
                },
                "subject": {
                    "reference": "http://acme.com/ehr/fhir/Patient/EjemploPatient"
                }
            }
        },
        {
            "fullUrl": "http://acme.com/ehr/fhir/PractitionerRole/praR1",
            "resource": {
                "resourceType": "PractitionerRole",
                "id": "EjemploPractitionerRole1",
                "meta": {
                    "profile": [
                        "https://interoperabilidad.minsal.cl/fhir/ig/tei/StructureDefinition/PractitionerRoleLE"
                    ]
                },
                "text": {
                    "status": "generated",
                    "div": "<div xmlns=\"http://www.w3.org/1999/xhtml\"><p><b>Generated Narrative: PractitionerRole</b><a name=\"EjemploPractitionerRole\"> </a></p><div style=\"display: inline-block; background-color: #d9e0e7; padding: 6px; margin: 4px; border: 1px solid #8da1b4; border-radius: 5px; line-height: 60%\"><p style=\"margin-bottom: 0px\">Resource PractitionerRole &quot;EjemploPractitionerRole&quot; </p><p style=\"margin-bottom: 0px\">Profile: <a href=\"StructureDefinition-PractitionerRoleLE.html\">PractitionerRole LE</a></p></div><p><b>practitioner</b>: <a href=\"Bundle-EjemploBundleInicio.html#http-//acme.com/ehr/fhir/Practitioner/pra1\">http://acme.com/ehr/fhir/Practitioner/pra1</a></p><p><b>organization</b>: <a href=\"Bundle-EjemploBundleInicio.html#http-//acme.com/ehr/fhir/Organization/org1\">http://acme.com/ehr/fhir/Organization/org1</a></p><p><b>code</b>: Iniciador <span style=\"background: LightGoldenRodYellow; margin: 4px; border: 1px solid khaki\"> (<a href=\"CodeSystem-CSPractitionerTipoRolLE.html\">Rol de médicos</a>#iniciador)</span></p></div>"
                },
                "practitioner": {
                    "reference": "http://acme.com/ehr/fhir/Practitioner/pra1"
                },
                "organization": {
                    "reference": "http://acme.com/ehr/fhir/Organization/org1"
                },
                "code": [
                    {
                        "coding": [
                            {
                                "system": "https://interoperabilidad.minsal.cl/fhir/ig/tei/CodeSystem/CSPractitionerTipoRolLE",
                                "code": "iniciador",
                                "display": "Iniciador"
                            }
                        ]
                    }
                ]
            }
        },
        {
            "fullUrl": "http://acme.com/ehr/fhir/Practitioner/pra1",
            "resource": {
                "resourceType": "Practitioner",
                "id": "EjemploPractitioner1",
                "meta": {
                    "profile": [
                        "https://interoperabilidad.minsal.cl/fhir/ig/tei/StructureDefinition/PractitionerLE"
                    ]
                },
                "text": {
                    "status": "generated",
                    "div": "<div xmlns=\"http://www.w3.org/1999/xhtml\"><p><b>Generated Narrative: Practitioner</b><a name=\"EjemploPractitioner\"> </a></p><div style=\"display: inline-block; background-color: #d9e0e7; padding: 6px; margin: 4px; border: 1px solid #8da1b4; border-radius: 5px; line-height: 60%\"><p style=\"margin-bottom: 0px\">Resource Practitioner &quot;EjemploPractitioner&quot; </p><p style=\"margin-bottom: 0px\">Profile: <a href=\"StructureDefinition-PractitionerLE.html\">Practitioner LE</a></p></div><p><b>identifier</b>: RUN: 2134\u00a0(use:\u00a0OFFICIAL), id:\u00a02134\u00a0(use:\u00a0SECONDARY)</p><p><b>name</b>: Luis Perez (OFFICIAL)</p><h3>Qualifications</h3><table class=\"grid\"><tr><td style=\"display: none\">-</td><td><b>Identifier</b></td><td><b>Code</b></td></tr><tr><td style=\"display: none\">*</td><td>id:\u00a0tit</td><td>MÉDICO CIRUJANO <span style=\"background: LightGoldenRodYellow; margin: 4px; border: 1px solid khaki\"> (<a href=\"CodeSystem-CSTituloProfesional.html\">TituloProfesional</a>#1)</span></td></tr></table></div>"
                },
                "identifier": [
                    {
                        "extension": [
                            {
                                "url": "https://interoperabilidad.minsal.cl/fhir/ig/tei/StructureDefinition/DigitoVerificador",
                                "valueString": "6"
                            }
                        ],
                        "use": "official",
                        "type": {
                            "coding": [
                                {
                                    "system": "http://terminology.cens.cl/CodeSystem/listaespera",
                                    "code": "RUN"
                                }
                            ]
                        },
                        "system": "http://registrocivil/RUN",
                        "value": "10111111-K"
                    },
                    {
                        "use": "secondary",
                        "system": "http://rnpi.superdesalud.gob.cl",
                        "value": "992323"
                    }
                ],
                "name": [
                    {
                        "use": "official",
                        "family": "Sepulveda",
                        "_family": {
                            "extension": [
                                {
                                    "url": "https://hl7chile.cl/fhir/ig/clcore/StructureDefinition/SegundoApellido",
                                    "valueString": "Manriquez"
                                }
                            ]
                        },
                        "given": [
                            "Ernesto"
                        ]
                    }
                ],
                "qualification": [
                    {
                        "identifier": [
                            {
                                "value": "tit"
                            }
                        ],
                        "code": {
                            "coding": [
                                {
                                    "system": "https://interoperabilidad.minsal.cl/fhir/ig/tei/CodeSystem/CSTituloProfesional",
                                    "code": "1"
                                }
                            ]
                        }
                    }
                ]
            }
        },
        {
            "fullUrl": "http://acme.com/ehr/fhir/Organization/org1",
            "resource": {
                "resourceType": "Organization",
                "id": "EjemploOrganization1",
                "meta": {
                    "profile": [
                        "https://interoperabilidad.minsal.cl/fhir/ig/tei/StructureDefinition/OrganizationLE"
                    ]
                },
                "text": {
                    "status": "generated",
                    "div": "<div xmlns=\"http://www.w3.org/1999/xhtml\"><p><b>Generated Narrative: Organization</b><a name=\"EjemploOrganization\"> </a></p><div style=\"display: inline-block; background-color: #d9e0e7; padding: 6px; margin: 4px; border: 1px solid #8da1b4; border-radius: 5px; line-height: 60%\"><p style=\"margin-bottom: 0px\">Resource Organization &quot;EjemploOrganization&quot; </p><p style=\"margin-bottom: 0px\">Profile: <a href=\"StructureDefinition-OrganizationLE.html\">Organization LE</a></p></div><p><b>identifier</b>: Placer Identifier: 1</p></div>"
                },
                "identifier": [
                    {
                        "type": {
                            "coding": [
                                {
                                    "system": "http://terminology.hl7.org/CodeSystem/v2-0203",
                                    "code": "PLAC",
                                    "Display": "Centro de Salud Familiar San Juan Dios"
                                }
                            ]
                        },
                        "value": "116309"
                    }
                ]
            }
        }
    ]
}