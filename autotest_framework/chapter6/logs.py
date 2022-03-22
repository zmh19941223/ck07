import logging


LOG_FORMATTER = ('%(asctime)s - %(name)s - %(levelname)s - %(status)s - %(message)s',
                 '%H:%M:%S')
LOG_NAME = r'demo_log'
LOG_FILE = r'./demo.log'
LOG_LEVEL = logging.DEBUG


def creat_logger(log_name: str = LOG_NAME,
                 log_file: str = LOG_FILE,
                 log_level: int = LOG_LEVEL,
                 log_formatter: tuple = LOG_FORMATTER):
    """
    日志配置和生成器
    :param log_name:日志名称
    :param log_file:日志文件的路径
    :param log_level:日志等级
    :param log_formatter:日志的格式
    :return:
    """
    formatter = logging.Formatter(*log_formatter)

    handler = logging.FileHandler(log_file)
    print(handler.baseFilename)
    handler.setFormatter(formatter)

    logger = logging.getLogger(log_name)
    logger.setLevel(log_level)
    logger.addHandler(handler)
    return logger


log = creat_logger()
