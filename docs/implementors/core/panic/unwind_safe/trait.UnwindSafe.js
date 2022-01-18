(function() {var implementors = {};
implementors["oracle"] = [{"text":"impl&lt;'conn, 'sql&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.58.0/core/panic/unwind_safe/trait.UnwindSafe.html\" title=\"trait core::panic::unwind_safe::UnwindSafe\">UnwindSafe</a> for <a class=\"struct\" href=\"oracle/struct.BatchBuilder.html\" title=\"struct oracle::BatchBuilder\">BatchBuilder</a>&lt;'conn, 'sql&gt;","synthetic":true,"types":["oracle::batch::BatchBuilder"]},{"text":"impl&lt;'conn&gt; !<a class=\"trait\" href=\"https://doc.rust-lang.org/1.58.0/core/panic/unwind_safe/trait.UnwindSafe.html\" title=\"trait core::panic::unwind_safe::UnwindSafe\">UnwindSafe</a> for <a class=\"struct\" href=\"oracle/struct.Batch.html\" title=\"struct oracle::Batch\">Batch</a>&lt;'conn&gt;","synthetic":true,"types":["oracle::batch::Batch"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.58.0/core/panic/unwind_safe/trait.UnwindSafe.html\" title=\"trait core::panic::unwind_safe::UnwindSafe\">UnwindSafe</a> for <a class=\"enum\" href=\"oracle/enum.StartupMode.html\" title=\"enum oracle::StartupMode\">StartupMode</a>","synthetic":true,"types":["oracle::connection::StartupMode"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.58.0/core/panic/unwind_safe/trait.UnwindSafe.html\" title=\"trait core::panic::unwind_safe::UnwindSafe\">UnwindSafe</a> for <a class=\"enum\" href=\"oracle/enum.ShutdownMode.html\" title=\"enum oracle::ShutdownMode\">ShutdownMode</a>","synthetic":true,"types":["oracle::connection::ShutdownMode"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.58.0/core/panic/unwind_safe/trait.UnwindSafe.html\" title=\"trait core::panic::unwind_safe::UnwindSafe\">UnwindSafe</a> for <a class=\"enum\" href=\"oracle/enum.Privilege.html\" title=\"enum oracle::Privilege\">Privilege</a>","synthetic":true,"types":["oracle::connection::Privilege"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.58.0/core/panic/unwind_safe/trait.UnwindSafe.html\" title=\"trait core::panic::unwind_safe::UnwindSafe\">UnwindSafe</a> for <a class=\"enum\" href=\"oracle/enum.ConnStatus.html\" title=\"enum oracle::ConnStatus\">ConnStatus</a>","synthetic":true,"types":["oracle::connection::ConnStatus"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.58.0/core/panic/unwind_safe/trait.UnwindSafe.html\" title=\"trait core::panic::unwind_safe::UnwindSafe\">UnwindSafe</a> for <a class=\"struct\" href=\"oracle/struct.Connector.html\" title=\"struct oracle::Connector\">Connector</a>","synthetic":true,"types":["oracle::connection::Connector"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.58.0/core/panic/unwind_safe/trait.UnwindSafe.html\" title=\"trait core::panic::unwind_safe::UnwindSafe\">UnwindSafe</a> for <a class=\"struct\" href=\"oracle/struct.Connection.html\" title=\"struct oracle::Connection\">Connection</a>","synthetic":true,"types":["oracle::connection::Connection"]},{"text":"impl !<a class=\"trait\" href=\"https://doc.rust-lang.org/1.58.0/core/panic/unwind_safe/trait.UnwindSafe.html\" title=\"trait core::panic::unwind_safe::UnwindSafe\">UnwindSafe</a> for <a class=\"enum\" href=\"oracle/enum.Error.html\" title=\"enum oracle::Error\">Error</a>","synthetic":true,"types":["oracle::error::Error"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.58.0/core/panic/unwind_safe/trait.UnwindSafe.html\" title=\"trait core::panic::unwind_safe::UnwindSafe\">UnwindSafe</a> for <a class=\"struct\" href=\"oracle/struct.ParseOracleTypeError.html\" title=\"struct oracle::ParseOracleTypeError\">ParseOracleTypeError</a>","synthetic":true,"types":["oracle::error::ParseOracleTypeError"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.58.0/core/panic/unwind_safe/trait.UnwindSafe.html\" title=\"trait core::panic::unwind_safe::UnwindSafe\">UnwindSafe</a> for <a class=\"struct\" href=\"oracle/struct.DbError.html\" title=\"struct oracle::DbError\">DbError</a>","synthetic":true,"types":["oracle::error::DbError"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.58.0/core/panic/unwind_safe/trait.UnwindSafe.html\" title=\"trait core::panic::unwind_safe::UnwindSafe\">UnwindSafe</a> for <a class=\"struct\" href=\"oracle/oci_attr/data_type/struct.AttrValue.html\" title=\"struct oracle::oci_attr::data_type::AttrValue\">AttrValue</a>","synthetic":true,"types":["oracle::oci_attr::data_type::AttrValue"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.58.0/core/panic/unwind_safe/trait.UnwindSafe.html\" title=\"trait core::panic::unwind_safe::UnwindSafe\">UnwindSafe</a> for <a class=\"struct\" href=\"oracle/oci_attr/data_type/struct.DurationUsecU64.html\" title=\"struct oracle::oci_attr::data_type::DurationUsecU64\">DurationUsecU64</a>","synthetic":true,"types":["oracle::oci_attr::data_type::DurationUsecU64"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.58.0/core/panic/unwind_safe/trait.UnwindSafe.html\" title=\"trait core::panic::unwind_safe::UnwindSafe\">UnwindSafe</a> for <a class=\"enum\" href=\"oracle/oci_attr/data_type/enum.MaxStringSize.html\" title=\"enum oracle::oci_attr::data_type::MaxStringSize\">MaxStringSize</a>","synthetic":true,"types":["oracle::oci_attr::data_type::MaxStringSize"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.58.0/core/panic/unwind_safe/trait.UnwindSafe.html\" title=\"trait core::panic::unwind_safe::UnwindSafe\">UnwindSafe</a> for <a class=\"struct\" href=\"oracle/oci_attr/handle/struct.SvcCtx.html\" title=\"struct oracle::oci_attr::handle::SvcCtx\">SvcCtx</a>","synthetic":true,"types":["oracle::oci_attr::handle::SvcCtx"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.58.0/core/panic/unwind_safe/trait.UnwindSafe.html\" title=\"trait core::panic::unwind_safe::UnwindSafe\">UnwindSafe</a> for <a class=\"struct\" href=\"oracle/oci_attr/handle/struct.Server.html\" title=\"struct oracle::oci_attr::handle::Server\">Server</a>","synthetic":true,"types":["oracle::oci_attr::handle::Server"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.58.0/core/panic/unwind_safe/trait.UnwindSafe.html\" title=\"trait core::panic::unwind_safe::UnwindSafe\">UnwindSafe</a> for <a class=\"struct\" href=\"oracle/oci_attr/handle/struct.Session.html\" title=\"struct oracle::oci_attr::handle::Session\">Session</a>","synthetic":true,"types":["oracle::oci_attr::handle::Session"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.58.0/core/panic/unwind_safe/trait.UnwindSafe.html\" title=\"trait core::panic::unwind_safe::UnwindSafe\">UnwindSafe</a> for <a class=\"struct\" href=\"oracle/oci_attr/handle/struct.Stmt.html\" title=\"struct oracle::oci_attr::handle::Stmt\">Stmt</a>","synthetic":true,"types":["oracle::oci_attr::handle::Stmt"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.58.0/core/panic/unwind_safe/trait.UnwindSafe.html\" title=\"trait core::panic::unwind_safe::UnwindSafe\">UnwindSafe</a> for <a class=\"struct\" href=\"oracle/oci_attr/mode/struct.Read.html\" title=\"struct oracle::oci_attr::mode::Read\">Read</a>","synthetic":true,"types":["oracle::oci_attr::mode::Read"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.58.0/core/panic/unwind_safe/trait.UnwindSafe.html\" title=\"trait core::panic::unwind_safe::UnwindSafe\">UnwindSafe</a> for <a class=\"struct\" href=\"oracle/oci_attr/mode/struct.Write.html\" title=\"struct oracle::oci_attr::mode::Write\">Write</a>","synthetic":true,"types":["oracle::oci_attr::mode::Write"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.58.0/core/panic/unwind_safe/trait.UnwindSafe.html\" title=\"trait core::panic::unwind_safe::UnwindSafe\">UnwindSafe</a> for <a class=\"struct\" href=\"oracle/oci_attr/mode/struct.ReadWrite.html\" title=\"struct oracle::oci_attr::mode::ReadWrite\">ReadWrite</a>","synthetic":true,"types":["oracle::oci_attr::mode::ReadWrite"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.58.0/core/panic/unwind_safe/trait.UnwindSafe.html\" title=\"trait core::panic::unwind_safe::UnwindSafe\">UnwindSafe</a> for <a class=\"struct\" href=\"oracle/oci_attr/struct.VarTypeMaxLenCompat.html\" title=\"struct oracle::oci_attr::VarTypeMaxLenCompat\">VarTypeMaxLenCompat</a>","synthetic":true,"types":["oracle::oci_attr::VarTypeMaxLenCompat"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.58.0/core/panic/unwind_safe/trait.UnwindSafe.html\" title=\"trait core::panic::unwind_safe::UnwindSafe\">UnwindSafe</a> for <a class=\"struct\" href=\"oracle/oci_attr/struct.CallTime.html\" title=\"struct oracle::oci_attr::CallTime\">CallTime</a>","synthetic":true,"types":["oracle::oci_attr::CallTime"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.58.0/core/panic/unwind_safe/trait.UnwindSafe.html\" title=\"trait core::panic::unwind_safe::UnwindSafe\">UnwindSafe</a> for <a class=\"struct\" href=\"oracle/oci_attr/struct.CollectCallTime.html\" title=\"struct oracle::oci_attr::CollectCallTime\">CollectCallTime</a>","synthetic":true,"types":["oracle::oci_attr::CollectCallTime"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.58.0/core/panic/unwind_safe/trait.UnwindSafe.html\" title=\"trait core::panic::unwind_safe::UnwindSafe\">UnwindSafe</a> for <a class=\"struct\" href=\"oracle/oci_attr/struct.DefaultLobPrefetchSize.html\" title=\"struct oracle::oci_attr::DefaultLobPrefetchSize\">DefaultLobPrefetchSize</a>","synthetic":true,"types":["oracle::oci_attr::DefaultLobPrefetchSize"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.58.0/core/panic/unwind_safe/trait.UnwindSafe.html\" title=\"trait core::panic::unwind_safe::UnwindSafe\">UnwindSafe</a> for <a class=\"struct\" href=\"oracle/oci_attr/struct.MaxOpenCursors.html\" title=\"struct oracle::oci_attr::MaxOpenCursors\">MaxOpenCursors</a>","synthetic":true,"types":["oracle::oci_attr::MaxOpenCursors"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.58.0/core/panic/unwind_safe/trait.UnwindSafe.html\" title=\"trait core::panic::unwind_safe::UnwindSafe\">UnwindSafe</a> for <a class=\"struct\" href=\"oracle/oci_attr/struct.TransactionInProgress.html\" title=\"struct oracle::oci_attr::TransactionInProgress\">TransactionInProgress</a>","synthetic":true,"types":["oracle::oci_attr::TransactionInProgress"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.58.0/core/panic/unwind_safe/trait.UnwindSafe.html\" title=\"trait core::panic::unwind_safe::UnwindSafe\">UnwindSafe</a> for <a class=\"struct\" href=\"oracle/oci_attr/struct.SqlFnCode.html\" title=\"struct oracle::oci_attr::SqlFnCode\">SqlFnCode</a>","synthetic":true,"types":["oracle::oci_attr::SqlFnCode"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.58.0/core/panic/unwind_safe/trait.UnwindSafe.html\" title=\"trait core::panic::unwind_safe::UnwindSafe\">UnwindSafe</a> for <a class=\"struct\" href=\"oracle/oci_attr/struct.Statement.html\" title=\"struct oracle::oci_attr::Statement\">Statement</a>","synthetic":true,"types":["oracle::oci_attr::Statement"]},{"text":"impl !<a class=\"trait\" href=\"https://doc.rust-lang.org/1.58.0/core/panic/unwind_safe/trait.UnwindSafe.html\" title=\"trait core::panic::unwind_safe::UnwindSafe\">UnwindSafe</a> for <a class=\"struct\" href=\"oracle/struct.Row.html\" title=\"struct oracle::Row\">Row</a>","synthetic":true,"types":["oracle::row::Row"]},{"text":"impl&lt;'a, T&gt; !<a class=\"trait\" href=\"https://doc.rust-lang.org/1.58.0/core/panic/unwind_safe/trait.UnwindSafe.html\" title=\"trait core::panic::unwind_safe::UnwindSafe\">UnwindSafe</a> for <a class=\"struct\" href=\"oracle/struct.ResultSet.html\" title=\"struct oracle::ResultSet\">ResultSet</a>&lt;'a, T&gt;","synthetic":true,"types":["oracle::row::ResultSet"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.58.0/core/panic/unwind_safe/trait.UnwindSafe.html\" title=\"trait core::panic::unwind_safe::UnwindSafe\">UnwindSafe</a> for <a class=\"struct\" href=\"oracle/sql_type/struct.IntervalDS.html\" title=\"struct oracle::sql_type::IntervalDS\">IntervalDS</a>","synthetic":true,"types":["oracle::sql_type::interval_ds::IntervalDS"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.58.0/core/panic/unwind_safe/trait.UnwindSafe.html\" title=\"trait core::panic::unwind_safe::UnwindSafe\">UnwindSafe</a> for <a class=\"struct\" href=\"oracle/sql_type/struct.IntervalYM.html\" title=\"struct oracle::sql_type::IntervalYM\">IntervalYM</a>","synthetic":true,"types":["oracle::sql_type::interval_ym::IntervalYM"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.58.0/core/panic/unwind_safe/trait.UnwindSafe.html\" title=\"trait core::panic::unwind_safe::UnwindSafe\">UnwindSafe</a> for <a class=\"struct\" href=\"oracle/sql_type/struct.Blob.html\" title=\"struct oracle::sql_type::Blob\">Blob</a>","synthetic":true,"types":["oracle::sql_type::lob::Blob"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.58.0/core/panic/unwind_safe/trait.UnwindSafe.html\" title=\"trait core::panic::unwind_safe::UnwindSafe\">UnwindSafe</a> for <a class=\"struct\" href=\"oracle/sql_type/struct.Clob.html\" title=\"struct oracle::sql_type::Clob\">Clob</a>","synthetic":true,"types":["oracle::sql_type::lob::Clob"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.58.0/core/panic/unwind_safe/trait.UnwindSafe.html\" title=\"trait core::panic::unwind_safe::UnwindSafe\">UnwindSafe</a> for <a class=\"struct\" href=\"oracle/sql_type/struct.Nclob.html\" title=\"struct oracle::sql_type::Nclob\">Nclob</a>","synthetic":true,"types":["oracle::sql_type::lob::Nclob"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.58.0/core/panic/unwind_safe/trait.UnwindSafe.html\" title=\"trait core::panic::unwind_safe::UnwindSafe\">UnwindSafe</a> for <a class=\"struct\" href=\"oracle/sql_type/struct.Collection.html\" title=\"struct oracle::sql_type::Collection\">Collection</a>","synthetic":true,"types":["oracle::sql_type::object::Collection"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.58.0/core/panic/unwind_safe/trait.UnwindSafe.html\" title=\"trait core::panic::unwind_safe::UnwindSafe\">UnwindSafe</a> for <a class=\"struct\" href=\"oracle/sql_type/struct.Object.html\" title=\"struct oracle::sql_type::Object\">Object</a>","synthetic":true,"types":["oracle::sql_type::object::Object"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.58.0/core/panic/unwind_safe/trait.UnwindSafe.html\" title=\"trait core::panic::unwind_safe::UnwindSafe\">UnwindSafe</a> for <a class=\"struct\" href=\"oracle/sql_type/struct.ObjectType.html\" title=\"struct oracle::sql_type::ObjectType\">ObjectType</a>","synthetic":true,"types":["oracle::sql_type::object::ObjectType"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.58.0/core/panic/unwind_safe/trait.UnwindSafe.html\" title=\"trait core::panic::unwind_safe::UnwindSafe\">UnwindSafe</a> for <a class=\"struct\" href=\"oracle/sql_type/struct.ObjectTypeAttr.html\" title=\"struct oracle::sql_type::ObjectTypeAttr\">ObjectTypeAttr</a>","synthetic":true,"types":["oracle::sql_type::object::ObjectTypeAttr"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.58.0/core/panic/unwind_safe/trait.UnwindSafe.html\" title=\"trait core::panic::unwind_safe::UnwindSafe\">UnwindSafe</a> for <a class=\"enum\" href=\"oracle/sql_type/enum.OracleType.html\" title=\"enum oracle::sql_type::OracleType\">OracleType</a>","synthetic":true,"types":["oracle::sql_type::oracle_type::OracleType"]},{"text":"impl !<a class=\"trait\" href=\"https://doc.rust-lang.org/1.58.0/core/panic/unwind_safe/trait.UnwindSafe.html\" title=\"trait core::panic::unwind_safe::UnwindSafe\">UnwindSafe</a> for <a class=\"struct\" href=\"oracle/sql_type/struct.RefCursor.html\" title=\"struct oracle::sql_type::RefCursor\">RefCursor</a>","synthetic":true,"types":["oracle::sql_type::ref_cursor::RefCursor"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.58.0/core/panic/unwind_safe/trait.UnwindSafe.html\" title=\"trait core::panic::unwind_safe::UnwindSafe\">UnwindSafe</a> for <a class=\"struct\" href=\"oracle/sql_type/struct.Timestamp.html\" title=\"struct oracle::sql_type::Timestamp\">Timestamp</a>","synthetic":true,"types":["oracle::sql_type::timestamp::Timestamp"]},{"text":"impl !<a class=\"trait\" href=\"https://doc.rust-lang.org/1.58.0/core/panic/unwind_safe/trait.UnwindSafe.html\" title=\"trait core::panic::unwind_safe::UnwindSafe\">UnwindSafe</a> for <a class=\"struct\" href=\"oracle/struct.SqlValue.html\" title=\"struct oracle::SqlValue\">SqlValue</a>","synthetic":true,"types":["oracle::sql_value::SqlValue"]},{"text":"impl&lt;'conn, 'sql&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.58.0/core/panic/unwind_safe/trait.UnwindSafe.html\" title=\"trait core::panic::unwind_safe::UnwindSafe\">UnwindSafe</a> for <a class=\"struct\" href=\"oracle/struct.StatementBuilder.html\" title=\"struct oracle::StatementBuilder\">StatementBuilder</a>&lt;'conn, 'sql&gt;","synthetic":true,"types":["oracle::statement::StatementBuilder"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.58.0/core/panic/unwind_safe/trait.UnwindSafe.html\" title=\"trait core::panic::unwind_safe::UnwindSafe\">UnwindSafe</a> for <a class=\"enum\" href=\"oracle/enum.StmtParam.html\" title=\"enum oracle::StmtParam\">StmtParam</a>","synthetic":true,"types":["oracle::statement::StmtParam"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.58.0/core/panic/unwind_safe/trait.UnwindSafe.html\" title=\"trait core::panic::unwind_safe::UnwindSafe\">UnwindSafe</a> for <a class=\"enum\" href=\"oracle/enum.StatementType.html\" title=\"enum oracle::StatementType\">StatementType</a>","synthetic":true,"types":["oracle::statement::StatementType"]},{"text":"impl&lt;'conn&gt; !<a class=\"trait\" href=\"https://doc.rust-lang.org/1.58.0/core/panic/unwind_safe/trait.UnwindSafe.html\" title=\"trait core::panic::unwind_safe::UnwindSafe\">UnwindSafe</a> for <a class=\"struct\" href=\"oracle/struct.Statement.html\" title=\"struct oracle::Statement\">Statement</a>&lt;'conn&gt;","synthetic":true,"types":["oracle::statement::Statement"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.58.0/core/panic/unwind_safe/trait.UnwindSafe.html\" title=\"trait core::panic::unwind_safe::UnwindSafe\">UnwindSafe</a> for <a class=\"struct\" href=\"oracle/struct.ColumnInfo.html\" title=\"struct oracle::ColumnInfo\">ColumnInfo</a>","synthetic":true,"types":["oracle::statement::ColumnInfo"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.58.0/core/panic/unwind_safe/trait.UnwindSafe.html\" title=\"trait core::panic::unwind_safe::UnwindSafe\">UnwindSafe</a> for <a class=\"struct\" href=\"oracle/struct.Version.html\" title=\"struct oracle::Version\">Version</a>","synthetic":true,"types":["oracle::version::Version"]}];
if (window.register_implementors) {window.register_implementors(implementors);} else {window.pending_implementors = implementors;}})()